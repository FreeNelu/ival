import React from "react";
import Navigation from "../navigation";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

const NavigationWrapper = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default NavigationWrapper;
