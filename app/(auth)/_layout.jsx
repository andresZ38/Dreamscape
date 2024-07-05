import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" options={{ headerShown: false }} />
      <Stack.Screen name="CreatePassword" options={{ headerShown: false }} />
      <Stack.Screen name="CreateAccount" options={{ headerShown: false }} />
      <Stack.Screen name="SuccessPage" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
