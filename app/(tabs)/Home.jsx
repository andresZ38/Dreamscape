import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeHeader from "../../components/HomeComponents/HomeHeader";
import HomePlaces from "../../components/HomeComponents/HomePlaces";
import HomePackages from "../../components/HomeComponents/HomePackages";
import HomeCategory from "../../components/HomeComponents/HomeCategory";
import HomeSearch from "../../components/HomeComponents/HomeSearch";
import { useContext } from "react";
import ThemeContext from "../../theme/ThemeContext";

const Home = () => {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <HomeSearch />
        <HomeCategory />
        <HomePlaces />
        <HomePackages />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});
