import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import CoupleIcon from "../../assets/images/SVGIcons/CoupleIcon";
import BudjetIcon from "../../assets/images/SVGIcons/BudjetIcon";
import CalendarIcon from "../../assets/images/SVGIcons/CalendarIcon";
import { Ionicons } from "@expo/vector-icons";
import GoaImage from "../../assets/images/Images/GoaImage.webp";
import SVGImages from "../../assets/images/SVGIcons";
import { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";

const ReviewPackage = () => {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.color }]}>
        Review Summary
      </Text>
      <View style={styles.itemContainer}>
        <Ionicons name="map-outline" style={styles.icon} color={theme.color} />
        <View style={styles.textContainer}>
          <Text
            style={[
              [styles.label, { color: theme.color }],
              { color: theme.color },
            ]}
          >
            Destination
          </Text>
          <View style={styles.subItemContainer}>
            <Image source={GoaImage} style={styles.image} />
            <View style={styles.locationTextContainer}>
              <Text style={[styles.locationName, { color: theme.color }]}>
                Misty Resort
              </Text>
              <Text style={{ color: theme.color }}>Goa, Maharashtra</Text>
              <SVGImages.StarReview />
            </View>
            <TouchableOpacity onPress={() => console.log("Edit destination")}>
              <Ionicons name="create-outline" style={styles.editIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <CoupleIcon style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={[styles.label, { color: theme.color }]}>Persons</Text>
          <Text style={{ color: theme.color }}>Couple 👫🏻</Text>
        </View>
        <TouchableOpacity onPress={() => console.log("Edit persons")}>
          <Ionicons
            name="create-outline"
            style={styles.editIcon}
            color={theme.color}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <CalendarIcon style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={[styles.label, { color: theme.color }]}>Trip Date</Text>
          <Text style={{ color: theme.color }}>
            March 20, 2024 to May 20, 2024 🗓
          </Text>
        </View>
        <TouchableOpacity onPress={() => console.log("Edit trip date")}>
          <Ionicons
            name="create-outline"
            style={styles.editIcon}
            color={theme.color}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.itemContainer}>
        <BudjetIcon style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={[styles.label, { color: theme.color }]}>Budget</Text>
          <Text style={{ color: theme.color }}>Luxury 💎</Text>
        </View>
        <TouchableOpacity onPress={() => console.log("Edit budget")}>
          <Ionicons
            name="create-outline"
            style={styles.editIcon}
            color={theme.color}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewPackage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: "row",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  editIcon: {
    fontSize: 24,
    marginLeft: "auto",
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 18,
  },
  subItemContainer: {
    flexDirection: "row",
  },
  image: {
    width: 150,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
  locationTextContainer: {
    flex: 1,
  },
  locationName: {
    fontWeight: "bold",
  },
});
