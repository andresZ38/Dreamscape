import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";

import InputComponent from "../InputComponent/InputComponent";
import ThemeContext from "../../theme/ThemeContext";
const CreateEmail = () => {
  const theme = useContext(ThemeContext);
  const [email, setEmail] = useState("");

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
          Enter Your Email
        </Text>
        <InputComponent
          label="Email"
          placeholder="willie.jennings@example.com"
          value={email}
          onChangeText={setEmail}
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

export default CreateEmail;

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
