import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import ProfileImg from "../../assets/images/Images/ProfileImage.png";
import NotificationIcon from "../../assets/images/SVGIcons/NotificationIcon";
import { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";

const HomeHeader = () => {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableOpacity style={styles.profileContainer}>
        <Image source={ProfileImg} style={styles.profileImage} />
      </TouchableOpacity>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Hello!</Text>
        <Text style={[styles.userName, { color: theme.color }]}>
          Cameron Williamson
        </Text>
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <NotificationIcon />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    marginTop: 20,
  },
  profileContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  greetingContainer: {
    flex: 1,
    marginLeft: 10,
  },
  greetingText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#018AD8",
  },
  userName: {
    fontSize: 14,
    color: "#555",
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 13.84,
    elevation: 5,
  },
});
