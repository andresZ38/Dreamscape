import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { TourPackages } from "../../../helpers/mock";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import SVGImages from "../../../assets/images/SVGIcons";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { useContext } from "react";
import ThemeContext from "../../../theme/ThemeContext";

const PackageDetails = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  const { id } = useLocalSearchParams();
  const packageId = parseInt(id, 10);
  const selectedPackage = TourPackages.find((pkg) => pkg.id === packageId);

  const [showFullAbout, setShowFullAbout] = useState(false);

  const toggleShowFullAbout = () => {
    setShowFullAbout(!showFullAbout);
  };

  if (!selectedPackage) {
    return (
      <View style={styles.container}>
        <Text>Package not found.</Text>
      </View>
    );
  }

  const aboutText = showFullAbout
    ? selectedPackage.about
    : selectedPackage.about.slice(0, 150) + "...";

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ImageBackground
        source={selectedPackage.mainImage}
        style={styles.mainImage}
      >
        <View style={styles.overlay} />
        <View style={styles.overlayIconLeft}>
          <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
            <FontAwesome6 name="arrow-left-long" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.overlayIcon}>
          <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
            <Ionicons name="share-social" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.iconButton}>
            <Ionicons name="heart-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.packageInfo}>
          <Text style={[styles.name, { color: "white" }]}>
            {selectedPackage.name}
          </Text>
          <View style={styles.reviewsImg}>
            <SVGImages.StarReview />
            <Text style={[styles.reviews, { color: "white" }]}>
              {selectedPackage.reviews}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <ScrollView style={styles.content}>
        <Text style={[styles.heading, { color: theme.color }]}>About</Text>
        <Text style={[styles.about, { lineHeight: 20, color: theme.color }]}>
          {aboutText}
        </Text>
        {selectedPackage.about.length > 150 && (
          <TouchableOpacity onPress={toggleShowFullAbout}>
            <Text
              style={[styles.readMore, showFullAbout && { color: theme.color }]}
            >
              {showFullAbout ? "Read less" : "Read more"}
            </Text>
          </TouchableOpacity>
        )}
        <Text style={[styles.heading, { color: theme.color }]}>Included</Text>
        <View style={styles.includedContainer}>
          <View style={styles.includedRow}>
            <View
              style={[
                styles.includedItem,
                { width: "48%", backgroundColor: theme.createAccount },
              ]}
            >
              <FontAwesome6 name="utensils" size={20} color="#0071C3" />
              <Text style={[styles.includedText, { color: theme.color }]}>
                {selectedPackage.food}
              </Text>
            </View>
            <View
              style={[
                styles.includedItem,
                { width: "48%", backgroundColor: theme.createAccount },
              ]}
            >
              <Ionicons name="time" size={20} color="#0071C3" />
              <Text style={[styles.includedText, { color: theme.color }]}>
                {selectedPackage.duration}
              </Text>
            </View>
          </View>
          <View style={styles.includedRow}>
            <View
              style={[
                styles.includedItem,
                { width: "48%", backgroundColor: theme.createAccount },
              ]}
            >
              <Ionicons name="location-outline" size={20} color="#0071C3" />
              <Text style={[styles.includedText, { color: theme.color }]}>
                {selectedPackage.location}
              </Text>
            </View>
            <View
              style={[
                styles.includedItem,
                { width: "48%", backgroundColor: theme.createAccount },
              ]}
            >
              <FontAwesome6 name="bus" size={20} color="#0071C3" />
              <Text style={[styles.includedText, { color: theme.color }]}>
                {selectedPackage.transportation}
              </Text>
            </View>
          </View>
        </View>
        <Text style={[styles.heading, { color: theme.color }]}>
          Where will you stay
        </Text>
        <SVGImages.MapImage />
        <Text style={[styles.subHeading, { color: theme.color }]}>
          Angkor Mails Hotel
        </Text>
        <View style={styles.imageContainer}>
          <View style={styles.imageColumn}>
            <Image source={selectedPackage.images[0]} style={styles.image} />
            <Image source={selectedPackage.images[1]} style={styles.image} />
          </View>
          <View style={styles.imageColumn}>
            <Image
              source={selectedPackage.images[2]}
              style={styles.imageVertical}
            />
          </View>
        </View>
        <Text style={[styles.heading, { color: theme.color }]}>Reviews</Text>
        <Text style={styles.staticReviewText}>140 Reviews</Text>
        {selectedPackage.comments.map((comment, index) => (
          <View key={index} style={styles.commentContainer}>
            <Image
              source={{ uri: "https://via.placeholder.com/50" }} // Placeholder for profile image
              style={styles.profileImage}
            />
            <View style={styles.commentContent}>
              <View style={styles.commentHeader}>
                <Text style={styles.commentName}>{comment.name}</Text>
              </View>
              <View style={styles.comentDateContainer}>
                <View style={styles.ratingStars}>
                  {[...Array(5)].map((_, i) => (
                    <Ionicons
                      key={i}
                      name="star"
                      size={15}
                      color={i < 4 ? "#FFD700" : "#d3d3d3"}
                    />
                  ))}
                </View>
                <Text style={[styles.commentDate, { color: theme.color }]}>
                  {comment.date}
                </Text>
              </View>

              <Text style={[styles.commentText, { color: theme.color }]}>
                {comment.comment}
              </Text>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.seeAllReviewsButton}>
          <Text style={styles.seeAllReviewsText}>See All Reviews</Text>
        </TouchableOpacity>
        <View style={styles.priceContainer}>
          <Text style={[styles.priceText, { color: theme.color }]}>
            ${selectedPackage.price}/person
          </Text>
          <CustomButton
            text="Book Now"
            onPress={() => router.push("tour-packages/booking/Bookings")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PackageDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainImage: {
    width: "100%",
    height: 320,
    marginBottom: 10,
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  overlayIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    gap: 20,
  },
  overlayIconLeft: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  iconButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
  },
  packageInfo: {
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  reviewsImg: {
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 12,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  about: {
    fontSize: 16,
    marginBottom: 10,
  },
  readMore: {
    color: "#0071C3",
    textDecorationLine: "underline",
  },
  content: {
    paddingHorizontal: 20,
  },
  includedContainer: {
    marginBottom: 20,
  },
  includedRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  includedItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 15,
    height: 70,
  },
  includedText: {
    marginLeft: 5,
  },
  mapImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  imageColumn: {
    width: "48%",
  },
  image: {
    width: "100%",
    height: 149,
    marginBottom: 10,
    borderRadius: 10,
  },
  imageVertical: {
    width: "100%",
    height: 310,
    borderRadius: 10,
  },
  staticReviewText: {
    fontSize: 16,
    marginVertical: 10,
  },
  commentContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  commentName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingStars: {
    flexDirection: "row",
  },
  comentDateContainer: { flexDirection: "row", gap: 10 },
  commentDate: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5,
  },
  commentText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 24,
  },
  seeAllReviewsButton: {
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: "row",
  },
  seeAllReviewsText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    backgroundColor: "#f1f1f1",
    padding: 13,
    borderRadius: 10,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: "#f1f1f1",
    borderRadius: 20,
  },
  priceText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0FA3E2",
  },
  customButton: {
    backgroundColor: "#0071C3",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
