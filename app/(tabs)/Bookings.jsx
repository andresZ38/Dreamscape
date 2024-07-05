import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";

const Bookings = () => {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.color }]}>My Bookings</Text>
      <Text style={[styles.quote, { color: theme.color }]}>
        "The best way to predict your future is to create it." - Abraham Lincoln
      </Text>
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  quote: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
  },
});
