import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import InputComponent from "../InputComponent/InputComponent";
import { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const theme = useContext(ThemeContext);
  const goBack = () => {
    router.back();
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView>
        <Text
          style={[
            styles.subHeading,
            { fontFamily: "Poppins_400Regular", color: theme.color },
          ]}
        >
          Create New Account
        </Text>
        <Text
          style={[
            styles.heading,
            { fontFamily: "Poppins_700Bold", color: theme.color },
          ]}
        >
          Create a password
        </Text>
        <InputComponent
          label="New Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
        />
        <Text
          style={[
            styles.description,
            { fontFamily: "Poppins_400Regular", color: theme.color },
          ]}
        >
          Proin fermentum leo vel orci non pulvinar neque ornar eget egestas
          purus risus ultricies.
        </Text>
      </ScrollView>
    </View>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  description: {
    color: "#474747",
    fontSize: 13,
    marginBottom: 10,
  },
});
