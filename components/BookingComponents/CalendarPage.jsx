import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import ThemeContext from "../../theme/ThemeContext";

const CalendarPage = () => {
  const [selected, setSelected] = useState("");
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.color }]}>
        When will your adventure begin and end? 🗓
      </Text>
      <Text style={[styles.subheading, { color: theme.color }]}>
        Metus dictum at tempor commodo ullamcorper a lacus vestibulum?
      </Text>
      <Calendar
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: "orange",
          },
        }}
        style={styles.calendar}
        theme={{
          backgroundColor: theme.calendarBg,
          calendarBackground: theme.createAccount,
          textSectionTitleColor: theme.color,
          selectedDayBackgroundColor: "#0071C3",
          selectedDayTextColor: "white",
          todayTextColor: theme.color,
          dayTextColor: theme.color,
          textDisabledColor: "#f1f1f1",
          arrowColor: theme.arrow,
          monthTextColor: theme.color,
        }}
      />
    </View>
  );
};

export default CalendarPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendar: {
    borderColor: "transparent",
    elevation: 5,
    marginVertical: 25,
    borderRadius: 15,
    padding: 10,
  },
  heading: {
    fontFamily: "Poppins_700Bold",
    fontSize: 22,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    marginBottom: 20,
  },
});
