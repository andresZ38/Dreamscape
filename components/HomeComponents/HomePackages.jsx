import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { TourPackages } from "../../helpers/mock";
import SVGImages from "../../assets/images/SVGIcons";
import { router } from "expo-router";
import ThemeContext from "../../theme/ThemeContext";

const HomePackages = () => {
  const theme = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, { color: theme.color }]}>
        Exclusive Packages
      </Text>
      <FlatList
        data={TourPackages}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.slide}
            onPress={() => {
              router.push(`/tour-packages/${item.id}`);
            }}
          >
            <View
              style={[styles.card, { backgroundColor: theme.createAccount }]}
            >
              <Image source={item.mainImage} style={styles.mainImage} />
              <View style={styles.details}>
                <Text style={[styles.name, { color: theme.color }]}>
                  {item.name.substring(0, 18)}....
                </Text>
                <SVGImages.StarReview />
                <Text style={[styles.reviews, { color: theme.color }]}>
                  {item.reviews}
                </Text>
                <Text style={[styles.about, { color: theme.about }]}>
                  About: {item.about.substring(0, 23)}...
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  slide: {
    width: 230, // Fixed width for each slide
    height: 350, // Fixed height for each slide to match card height
    marginRight: 20,
    marginBottom: 20,
    paddingBottom: 8,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    flex: 1,
    paddingBottom: 8,
  },
  mainImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  details: {
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  reviews: {
    marginBottom: 5,
  },
  about: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default HomePackages;
