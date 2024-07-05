import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MyCheckbox from "../Checkbox/MyCheckbox";
import { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";

const budgetOptions = [
  {
    id: 1,
    name: "Only Me 🚶🏻",
    description: "Travel Solo",
  },
  {
    id: 2,
    name: "Couple 👫🏻",
    description: "A love gateway",
  },
  {
    id: 3,
    name: "Family 👨‍👩‍👧‍👦",
    description: "Time with your loved ones",
  },
  {
    id: 4,
    name: "Friends 👬",
    description: "Fun times",
  },
];

const ChoosePackage = () => {
  const [checkedItemId, setCheckedItemId] = useState(null);
  const theme = useContext(ThemeContext);
  const handleCheckboxChange = (id) => {
    setCheckedItemId(id);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.color }]}>
        Going as a? 💼{" "}
      </Text>
      <Text style={[styles.subheading, { color: theme.color }]}>
        Metus dictum at tempor commodo ullamcorper a lacus vestibulum?
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.budgetContainer}>
          {budgetOptions.map((item) => {
            const isChecked = checkedItemId === item.id;
            return (
              <Pressable
                key={item.id}
                onPress={() => handleCheckboxChange(item.id)}
                style={styles.budgetWrapper}
              >
                {isChecked ? (
                  <LinearGradient
                    colors={["#0071C3", "#33B2FF"]}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={styles.budgetItem}
                  >
                    <View style={styles.budgetText}>
                      <Text
                        style={[
                          styles.budgetHeading,
                          styles.budgetTextChecked,
                          { color: theme.color },
                        ]}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={[
                          styles.budgetTextChecked,
                          { color: theme.color },
                        ]}
                      >
                        {item.description}
                      </Text>
                      <Text style={styles.budgetTextChecked}>{item.price}</Text>
                    </View>
                    <MyCheckbox
                      isChecked={isChecked}
                      onChange={() => handleCheckboxChange(item.id)}
                      gradientColors={["#0071C3", "#33B2FF"]}
                    />
                  </LinearGradient>
                ) : (
                  <View style={styles.budgetItem}>
                    <View style={styles.budgetText}>
                      <Text
                        style={[styles.budgetHeading, { color: theme.color }]}
                      >
                        {item.name}
                      </Text>
                      <Text style={{ color: theme.color }}>
                        {item.description}
                      </Text>
                      <Text>{item.price}</Text>
                    </View>
                    <MyCheckbox
                      isChecked={isChecked}
                      onChange={() => handleCheckboxChange(item.id)}
                      gradientColors={["#0071C3", "#33B2FF"]}
                    />
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ChoosePackage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  heading: {
    fontFamily: "Poppins_700Bold",
    fontSize: 22,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
  },
  budgetContainer: {
    paddingBottom: 20,
  },
  budgetWrapper: {
    marginBottom: 20,
    borderRadius: 20,
    overflow: "hidden",
  },
  budgetItem: {
    borderWidth: 2,
    borderColor: "#CCCCCC",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
  },
  budgetText: {
    flex: 1,
  },
  budgetHeading: {
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
  },
  budgetTextChecked: {
    color: "white",
  },
});
