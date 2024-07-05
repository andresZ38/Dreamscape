import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons"; // Import FontAwesome from @expo/vector-icons
import InputComponent from "../../components/InputComponent/InputComponent";
import CustomButton from "../../components/CustomButton/CustomButton";
import { router } from "expo-router";
import { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";

const ForgotPassword = () => {
  const theme = useContext(ThemeContext);
  // Receive navigation as prop
  const [email, setEmail] = useState("");

  const goBack = () => {
    router.back();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <FontAwesome6 name="arrow-left" size={24} color={theme.color} />
        </TouchableOpacity>
        <Text
          style={[
            styles.subHeading,
            { fontFamily: "Poppins_400Regular", color: theme.color },
          ]}
        >
          Input Your Email
        </Text>
        <Text
          style={[
            styles.heading,
            { fontFamily: "Poppins_700Bold", color: theme.color },
          ]}
        >
          Forgot Password?
        </Text>
        <InputComponent
          label="Email"
          placeholder="willie.jennings@example.com"
          value={email}
          onChangeText={setEmail}
        />
      </ScrollView>
      <CustomButton
        text="Continue"
        onPress={() => router.push("CreatePassword")}
      />
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  heading: {
    color: "black",
    fontSize: 30,
    marginBottom: 10,
  },
  subHeading: {
    color: "#474747",
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  backButton: {
    marginBottom: 15,
  },
});
