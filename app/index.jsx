import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Swiper from "react-native-swiper";
import CustomButton from "../components/CustomButton/CustomButton";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

const Index = () => {
  const swiperRef = useRef(null); // Create a ref for the Swiper
  const navigation = useNavigation(); // Get the navigation object

  const onboardingData = [
    {
      image: require("../assets/images/Images/Onboarding/Onboarding1.webp"),
      heading: "Get ready for the next trip",
      description:
        "Find thousands of tourist destinations ready for you to visit",
    },
    {
      image: require("../assets/images/Images/Onboarding/Onboarding2.webp"),
      heading: "Visit the Places attractions",
      description:
        "Find thousands of tourist destinations ready for you to visit",
    },
    {
      image: require("../assets/images/Images/Onboarding/Onboarding3.webp"),
      heading: "Make the moment Memorable",
      description:
        "Find thousands of tourist destinations ready for you to visit",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        ref={swiperRef} // Attach the ref to the Swiper
        style={styles.wrapper}
        activeDotColor="#0071C3"
        activeDotStyle={styles.activeDot}
        dotStyle={styles.dot}
        loop={false}
      >
        {onboardingData.map((item, index) => (
          <View key={index} style={styles.slide}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => router.push("Login")} // Navigate to the login page
            >
              <FontAwesome name="angle-right" size={30} color="#000" />
            </TouchableOpacity>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={[styles.heading, { fontFamily: "Poppins_700Bold" }]}>
                {item.heading}
              </Text>
              <Text
                style={[
                  styles.description,
                  { fontFamily: "Poppins_400Regular" },
                ]}
              >
                {item.description}
              </Text>
              <CustomButton
                text={
                  index === onboardingData.length - 1 ? "Get Started" : "Next"
                }
                onPress={() => {
                  if (index !== onboardingData.length - 1) {
                    swiperRef.current.scrollBy(1); // Navigate to the next slide
                  } else {
                    router.push("Login");
                  }
                }}
                bgColor="#0071C3"
                borderColor="#33B2FF"
                textColor="#FFFFFF"
              />
            </View>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
    marginTop: 30,
  },
  textContainer: {
    padding: 30,
    paddingTop: 15,
    backgroundColor: "#F1F1F1",
    marginTop: 20,
    borderRadius: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 30,
  },
  activeDot: {
    width: 25,
    height: 6,
  },
  dot: {
    width: 25,
    height: 6,
  },
  iconContainer: {
    marginTop: 30,
    marginBotttom: 40,
    position: "absolute",
    top: 20,
    right: 10,
    zIndex: 1,
  },
});
