import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import MyCheckbox from "../Checkbox/MyCheckbox";
import { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";

const budgetOptions = [
  {
    id: 1,
    name: "Cheap 💰",
    description: "Budget-friendly amount",
    price: "600/person",
  },
  {
    id: 2,
    name: "Balanced 💴",
    description: "Budget-friendly amount",
    price: "600/person",
  },
  {
    id: 3,
    name: "Flexible 💸",
    description: "No budget restriction",
    price: "600/person",
  },
  {
    id: 4,
    name: "Luxury 💎",
    description: "High-budget",
    price: "1600/person",
  },
];

const BudgetPackage = () => {
  const [checkedItemId, setCheckedItemId] = useState(null);
  const theme = useContext(ThemeContext);
  const handleCheckboxChange = (id) => {
    setCheckedItemId(id);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.heading, { color: theme.color }]}>
          Set your trip budget? 💸
        </Text>
        <Text style={[styles.subheading, { color: theme.color }]}>
          Metus dictum at tempor commodo ullamcorper a lacus vestibulum?
        </Text>

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
                        style={[styles.budgetHeading, styles.budgetTextChecked]}
                      >
                        {item.name}
                      </Text>
                      <Text style={styles.budgetTextChecked}>
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
      </View>
    </ScrollView>
  );
};

export default BudgetPackage;

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
