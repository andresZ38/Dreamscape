import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import PersonalIcon from "../../assets/images/SVGIcons/PersonalIcon";
import LogoutIcon from "../../assets/images/SVGIcons/LogoutIcon";
import SecurityIcon from "../../assets/images/SVGIcons/SecurityIcon";
import StarIcon from "../../assets/images/SVGIcons/StarIcon";
import PreferenceIcon from "../../assets/images/SVGIcons/PreferenceIcon";
import HelpIcon from "../../assets/images/SVGIcons/HelpIcon";
import { FontAwesome, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import SVGImages from "../../assets/images/SVGIcons";
import ThemeContext from "../../theme/ThemeContext";
import { EventRegister } from "react-native-event-listeners";
import AsyncStorage from "@react-native-async-storage/async-storage";

const settingsOptions = [
  {
    icon: <PersonalIcon />,
    text: "Personal Info",
    onPress: () => Alert.alert("Personal Info"),
  },
  {
    icon: <HelpIcon />,
    text: "Help & Support",
    onPress: () => Alert.alert("Help & Support"),
  },
  {
    icon: <PreferenceIcon />,
    text: "Travel Preferences",
    onPress: () => Alert.alert("Travel Preferences"),
  },
  {
    icon: <StarIcon />,
    text: "Billing & Subscriptions",
    onPress: () => Alert.alert("Billing & Subscriptions"),
  },
  {
    icon: <SecurityIcon />,
    text: "Account & Security",
    onPress: () => Alert.alert("Account & Security"),
  },
];

const Settings = () => {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const loadDarkModeState = async () => {
      try {
        const darkModeState = await AsyncStorage.getItem("darkMode");
        if (darkModeState !== null) {
          const parsedState = JSON.parse(darkModeState);
          setDarkMode(parsedState.darkMode);
        }
      } catch (error) {
        console.error("Error loading dark mode state:", error);
      }
    };

    loadDarkModeState();
  }, []);

  useEffect(() => {
    const saveDarkModeState = async () => {
      try {
        await AsyncStorage.setItem("darkMode", JSON.stringify({ darkMode }));
      } catch (error) {
        console.error("Error saving dark mode state:", error);
      }
    };

    saveDarkModeState();
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    EventRegister.emit("ChangeTheme", !darkMode);
  };

  const handleLogoutPress = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => navigation.navigate("Login"),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.headerContainer}>
        <View></View>
        <Text
          style={[
            styles.header,
            { fontFamily: "Poppins_700Bold", color: theme.color },
          ]}
        >
          Settings
        </Text>
        <TouchableOpacity onPress={toggleMode} style={styles.themeIcon}>
          <Ionicons
            name={darkMode ? "sunny-outline" : "moon-outline"}
            size={24}
            color={darkMode ? "#fff" : "#000"}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.gradientTouchable}
        onPress={() => Alert.alert("Upgrade Plan")}
      >
        <LinearGradient colors={["#33B2FF", "#0071C3"]} style={styles.gradient}>
          <SVGImages.PremiumStarIcon />
          <View style={styles.upgradeTextContainer}>
            <Text
              style={[styles.upgradeText, { fontFamily: "Poppins_700Bold" }]}
            >
              Upgrade Plan to Unlock More!
            </Text>
            <Text style={styles.upgradeSubText}>
              Enjoy all the benefits and explore more
            </Text>
          </View>
          <FontAwesome6 name="chevron-right" color="white" size={20} />
        </LinearGradient>
      </TouchableOpacity>
      {settingsOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionContainer}
          onPress={option.onPress}
        >
          <View style={styles.iconTextContainer}>
            {option.icon}
            <Text style={[styles.optionText, { color: theme.color }]}>
              {option.text}
            </Text>
          </View>
          <FontAwesome6 name="chevron-right" color={theme.color} size={20} />
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={handleLogoutPress}
      >
        <View style={styles.iconTextContainer}>
          <LogoutIcon />
          <Text style={[styles.optionText, { color: theme.color }]}>
            Logout
          </Text>
        </View>
        <FontAwesome6 name="chevron-right" color={theme.color} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  themeIcon: {
    padding: 10,
  },
  gradientTouchable: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: "hidden",
  },
  gradient: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    justifyContent: "space-between",
  },
  upgradeTextContainer: {
    marginLeft: 10,
  },
  upgradeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  upgradeSubText: {
    fontSize: 12,
    color: "#fff",
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 15,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
  },
});
