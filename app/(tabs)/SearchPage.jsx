import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import MapView from "react-native-maps";
import { router } from "expo-router";
import ThemeContext from "../../theme/ThemeContext";

const SearchPage = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const theme = useContext(ThemeContext);

  const handleSearchIconPress = () => {
    if (searchQuery.trim() !== "") {
      setRecentSearches([searchQuery, ...recentSearches.slice(0, 4)]);
      setSearchQuery(""); // Reset the search query input
    }
  };

  const handleLocationPress = () => {
    navigation.navigate("MapScreen");
  };

  const handleRecentSearchPress = (search) => {
    setSearchQuery(search);
  };

  const handleDeleteRecentSearch = (search) => {
    setRecentSearches(recentSearches.filter((item) => item !== search));
  };

  const handleClearRecentSearches = () => {
    setRecentSearches([]);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("Home")}>
          <FontAwesome6 name="arrow-left-long" size={20} color={theme.color} />
        </TouchableOpacity>
        <View
          style={[
            styles.searchContainer,
            { backgroundColor: theme.createAccount },
          ]}
        >
          <TextInput
            style={[styles.searchInput, { color: theme.color }]}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={theme.placeholderText}
          />
          <TouchableOpacity
            style={styles.searchIconContainer}
            onPress={handleSearchIconPress}
          >
            <FontAwesome6 name="magnifying-glass" size={20} color="grey" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.locationContainer}
        onPress={handleLocationPress}
      >
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={styles.locationTextContainer}>
          <FontAwesome6 name="map-marker-alt" size={24} color="white" />
          <Text style={styles.locationText}>Search places nearby</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.recentSearchesContainer}>
        <View style={styles.recentSearchHeader}>
          <Text style={[styles.relatedPlaces, { color: theme.color }]}>
            Recent Searches
          </Text>
          <TouchableOpacity onPress={handleClearRecentSearches}>
            <FontAwesome6 name="trash-alt" size={20} color={theme.color} />
          </TouchableOpacity>
        </View>
        {recentSearches.map((search, index) => (
          <TouchableOpacity
            key={index}
            style={styles.previousSearchItem}
            onPress={() => handleRecentSearchPress(search)}
          >
            <View style={{ flexDirection: "row", gap: 10 }}>
              <FontAwesome6 name="clock" size={20} color={theme.color} />
              <Text style={{ color: theme.color }}>{search}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDeleteRecentSearch(search)}>
              <FontAwesome6 name="xmark" size={20} color={theme.color} />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
    marginTop: 30,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: "100%",
  },
  searchIconContainer: {
    marginLeft: 10,
  },
  locationContainer: {
    borderRadius: 10,
    marginBottom: 20,
  },
  map: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  locationTextContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  },
  locationText: {
    color: "white",
    marginLeft: 5,
  },
  recentSearchesContainer: {
    flex: 1,
  },
  recentSearchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  relatedPlaces: {
    fontSize: 18,
    fontWeight: "bold",
  },
  previousSearchItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});
