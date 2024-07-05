import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SVGImages from "../../assets/images/SVGIcons";
import { FontAwesome6 } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";

const HomeSearch = () => {
  const theme = useContext(ThemeContext);
  const handleSearchPress = () => {
    router.push("SearchPage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.heading, { color: theme.color }]}>
          Where do you want to explore today?
        </Text>
      </View>
      <View style={styles.findProduct}>
        <TouchableOpacity
          style={styles.searchBarContainer}
          onPress={handleSearchPress}
        >
          <Text style={styles.searchText}>Search</Text>
          <View style={styles.searchIconContainer}>
            <FontAwesome6 name="magnifying-glass" color="grey" size={16} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterIconContainer}>
          <SVGImages.FilterIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 27,
    marginBottom: 8,
  },
  filterIconContainer: {
    width: 60,
    height: 60,
    alignItems: "center",
  },
  findProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingLeft: 15,
    marginBottom: 20,
    width: "85%",
    height: 50,
  },
  searchIconContainer: {
    marginRight: 10,
  },
  searchText: {
    fontSize: 16,
    color: "grey",
  },
});
