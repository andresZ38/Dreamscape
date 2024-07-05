import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const CustomButton = ({ onPress, text }) => {
  return (
    <LinearGradient
      colors={["#33B2FF", "#0071C3"]}
      style={styles.gradientBorder}
    >
      <TouchableOpacity style={[styles.button]} onPress={onPress}>
        <Text
          style={[
            styles.buttonText,
            { color: "#ffffff", fontFamily: "Poppins_500Medium" },
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  gradientBorder: {
    padding: 2, // Border width
    borderRadius: 10,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: 18,
  },
});
