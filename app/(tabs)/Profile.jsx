import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";

const Profile = () => {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.color }]}>My Profile</Text>
      <View style={styles.messageContainer}>
        <Text style={[styles.message, { color: theme.color }]}>
          Page is under construction. Stay tuned for updates.
        </Text>
        <Text style={[styles.quote, { color: theme.color }]}>
          "The best is yet to come."
        </Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Optional: ensures the background color is white
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  messageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20, // Optional: adds some padding for better readability
  },
  message: {
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20, // Adds space between the message and the quote
  },
  quote: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 10, // Adds space between the message and the quote
  },
});
