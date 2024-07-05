import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";

const Wishlist = () => {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.messageContainer}>
        <Text style={[styles.heading, { color: theme.color }]}>MY Wishlit</Text>
        <Text style={[styles.message, { color: theme.color }]}>
          Page is under construction. The best is yet to come.
        </Text>
        <Text style={[styles.quote, { color: theme.color }]}>
          "Good things come to those who wait."
        </Text>
      </View>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Optional: ensures the background color is white
    justifyContent: "center",
    alignItemsL: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  messageContainer: {
    flex: 1,
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
