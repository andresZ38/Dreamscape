import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const MyCheckbox = ({ isChecked, onChange, gradientColors }) => {
  return (
    <Pressable onPress={onChange} style={styles.checkboxContainer}>
      {isChecked ? (
        <LinearGradient
          colors={gradientColors}
          start={[0, 0]}
          end={[1, 1]}
          style={styles.checkboxChecked}
        >
          <FontAwesome name="check" size={18} color="white" />
        </LinearGradient>
      ) : (
        <View style={styles.checkboxBase} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#f1f1f1",
  },
  checkboxBase: {
    flex: 1,
    borderRadius: 5,
  },
  checkboxChecked: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});

export default MyCheckbox;
