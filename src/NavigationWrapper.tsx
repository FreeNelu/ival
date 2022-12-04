import React from "react";
import Navigation from "../navigation";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useColorScheme from "../hooks/useColorScheme";
import { ImageBackground } from "react-native";

const NavigationWrapper = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default NavigationWrapper;
