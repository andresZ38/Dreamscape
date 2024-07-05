import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";

const InputComponent = ({
  label,
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
}) => {
  const theme = useContext(ThemeContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(
    label.toLowerCase() === "password" ||
      label.toLowerCase().includes("password")
  );
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View
      style={[styles.inputContainer, { backgroundColor: theme.background }]}
    >
      <Text
        style={[
          styles.label,
          { backgroundColor: theme.background, color: theme.color },
        ]}
      >
        {label}
      </Text>
      <View
        style={[
          styles.inputWrapper,
          { borderColor: isFocused ? "black" : "#CCCCCC" },
        ]}
      >
        <TextInput
          style={[styles.input, { color: theme.color }]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          secureTextEntry={
            label.toLowerCase().includes("password") && isPasswordVisible
          }
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={theme.placeholderText}
        />
        {label.toLowerCase().includes("password") && (
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.icon}
          >
            <FontAwesome
              name={isPasswordVisible ? "eye-slash" : "eye"}
              size={20}
              color={theme.color}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
    marginTop: 20,
  },
  label: {
    position: "absolute",
    top: -10,
    left: 15,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    fontSize: 16,
    color: "#333",
    zIndex: 1,
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
    zIndex: 0,
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    borderWidth: 0,
  },
  icon: {
    padding: 10,
  },
});
