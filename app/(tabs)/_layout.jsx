import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import SVGImages from "../../assets/images/SVGIcons";
import UserIcon from "../../assets/images/SVGIcons/UserIcon";
import HeartIcon from "../../assets/images/SVGIcons/HeartIcon";
import BookmarkIcon from "../../assets/images/SVGIcons/BookmarkIcon";
import SettingsIcon from "../../assets/images/SVGIcons/SettingsIcon";
import ThemeContext from "../../theme/ThemeContext";

export default function TabLayout() {
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "blue",
          tabBarShowLabel: false,
          tabBarStyle: [
            styles.tabBar,
            { backgroundColor: theme.createAccount },
          ],
        }}
      >
        <Tabs.Screen
          name="Profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => <UserIcon color={color} />,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Wishlist"
          options={{
            title: "Wishlist",
            tabBarIcon: ({ color }) => <HeartIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <SVGImages.HomeIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="Bookings"
          options={{
            title: "Bookings",
            tabBarIcon: ({ color }) => <BookmarkIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="Settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
          }}
        />
        <Tabs.Screen
          name="SearchPage"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="tour-packages/[id]"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="tour-packages/booking/Bookings"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tabBar: {
    paddingVertical: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 50,
    height: 85,
    flexDirection: "row",
    justifyContent: "center",
    borderTopColor: "transparent",
    backgroundColor: "white",
  },
});
