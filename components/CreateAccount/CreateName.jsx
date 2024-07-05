import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import InputComponent from "../InputComponent/InputComponent";
import ThemeContext from "../../theme/ThemeContext";

const CreateName = () => {
  const theme = useContext(ThemeContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
          What’s Your Name?
        </Text>
        <InputComponent
          label="First Name"
          placeholder="Johnty "
          value={firstName}
          onChangeText={setFirstName}
        />
        <InputComponent
          label="Last Name"
          placeholder="Rhodes"
          value={lastName}
          onChangeText={setLastName}
        />
      </ScrollView>
    </View>
  );
};

export default CreateName;

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
});
