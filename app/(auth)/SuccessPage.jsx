import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import SuccessImage from "../../assets/images/Images/Onboarding/SuccessImage.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import { router } from "expo-router";
import { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";

const SuccessPage = () => {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={SuccessImage} style={styles.image} />
        <Text
          style={[
            styles.heading,
            { fontFamily: "Poppins_700Bold", color: theme.color },
          ]}
        >
          Successfully created an account
        </Text>
        <Text
          style={[
            styles.description,
            { fontFamily: "Poppins_400Regular", color: theme.color },
          ]}
        >
          Tellus in metus vulputate eu scelerisque felis imperdiet proin. Eget
          duis at tellus at urna mattis pellentesque. Vestibulum sed arcu non
          odio Congue nisi vitae suscipit tellus mauris.
        </Text>
      </ScrollView>
      <CustomButton text="Finish" onPress={() => router.push("Login")} />
    </View>
  );
};

export default SuccessPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  scrollContent: {
    alignItems: "center",
  },
  heading: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 30,
  },
  description: {
    fontSize: 14,
    color: "#474747",
    textAlign: "center",
    paddingVertical: 20,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
    marginTop: 30,
  },
});
