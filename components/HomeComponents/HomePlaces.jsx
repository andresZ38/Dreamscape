import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";
import TouristPlaces from "../../helpers/mock";
import ThemeContext from "../../theme/ThemeContext";
import SVGImages from "../../assets/images/SVGIcons";

const HomePlaces = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const theme = useContext(ThemeContext);

  const filterPlacesByCategory = (category) => {
    return TouristPlaces.filter((place) => {
      if (category === "All") return true;
      return place.category === category;
    });
  };

  const categories = [
    "All",
    "Popular",
    "Recommended",
    "Best Visited",
    "Most Viewed",
  ];

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: theme.color }]}>
          Best Places
        </Text>
        <Text style={styles.headerLink}>See all</Text>
      </View>

      <View style={styles.categoryContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryItem,
                activeCategory === category && styles.activeCategoryItem,
              ]}
              onPress={() => setActiveCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  activeCategory === category && styles.activeCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Swiper
        containerStyle={styles.swiperContainer}
        paginationStyle={styles.paginationStyle}
        showsPagination={true}
        dot={<View style={styles.paginationDot} />}
        activeDot={<View style={styles.paginationActiveDot} />}
        loop={false}
      >
        {filterPlacesByCategory(activeCategory).map((place, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.cardContent,
              { backgroundColor: theme.createAccount },
            ]}
          >
            <View style={styles.imageContainer}>
              <Image source={place.image} style={styles.image} />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={[styles.name, { color: theme.color }]}>
                {truncateText(place.name, 10)}
              </Text>
              <Text style={[styles.location, { color: theme.color }]}>
                {truncateText(place.location, 10)}
              </Text>
              <Text style={styles.comments}>
                {" "}
                <SVGImages.StarReview /> {place.reviewsCount} reviews
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};

export default HomePlaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerLink: {
    fontSize: 16,
    color: "#018ADB",
  },
  categoryContainer: {
    marginVertical: 10,
  },
  categoryScroll: {},
  categoryItem: {
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#EFEFEF",
  },
  activeCategoryItem: {
    backgroundColor: "#018ADB",
  },
  categoryText: {
    fontSize: 16,
    color: "#000",
  },
  activeCategoryText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  swiperContainer: {
    flex: 1,
    height: 200,
  },
  cardContent: {
    width: "90%",
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "white",
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  imageContainer: {
    width: 140,
    height: 94,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    marginBottom: 5,
  },
  comments: {
    fontSize: 12,
  },
  paginationStyle: {
    bottom: 10,
  },
  paginationDot: {
    width: 6,
    height: 6,
    borderRadius: 4,
    backgroundColor: "rgba(1, 138, 219,0.4)",
    marginHorizontal: 4,
  },
  paginationActiveDot: {
    width: 23,
    height: 6,
    borderRadius: 6,
    backgroundColor: "#0071C3",
    marginHorizontal: 4,
  },
});
