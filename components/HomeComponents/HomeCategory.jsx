import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import SVGImages from "../../assets/images/SVGIcons"; // Ensure this is the correct path to your SVGIcons
import ThemeContext from "../../theme/ThemeContext";

const { width } = Dimensions.get("window");

const HomeCategory = () => {
  const theme = useContext(ThemeContext);
  const categories = [
    { icon: <SVGImages.MountainIcon />, text: "Hills" },
    { icon: <SVGImages.BeachIcon />, text: "Beach" },
    { icon: <SVGImages.ParkIcon />, text: "Park" },
    { icon: <SVGImages.CampingIcon />, text: "Camping" },
    { icon: <SVGImages.BeachIcon />, text: "Lake" },
    { icon: <SVGImages.ParkIcon />, text: "Forest" },
    { icon: <SVGImages.CampingIcon />, text: "Desert" },
  ];

  // Group categories into sets of four
  const groupedCategories = [];
  for (let i = 0; i < categories.length; i += 4) {
    groupedCategories.push(categories.slice(i, i + 4));
  }

  const handleCategoryPress = (categoryId) => {
    console.log("Category Pressed:", categoryId);
    // Handle category press here
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: theme.color }]}>
        Choose Category
      </Text>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={false}
        loop={true}
        containerStyle={styles.swiperContainer}
      >
        {groupedCategories.map((group, groupIndex) => (
          <View key={groupIndex} style={styles.slide}>
            {group.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={styles.categoryContainer}
                onPress={() => handleCategoryPress(`${groupIndex}-${index}`)}
                activeOpacity={0.8}
              >
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: theme.category },
                  ]}
                >
                  {category.icon}
                </View>
                <Text style={styles.categoryText}>{category.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default HomeCategory;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  wrapper: {
    height: 120,
  },
  swiperContainer: {
    width: width,
  },
  slide: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: width,
  },
  categoryContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: width / 4,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#018ADB",
    textAlign: "center",
  },
});
