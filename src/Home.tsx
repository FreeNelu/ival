import React from "react";
import Navigation from "../navigation";
import { styles } from "./Home.styles";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "react-native";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import useColorScheme from "../hooks/useColorScheme";

const SignOutButton = () => {
  const { signOut } = useAuthenticator();
  return <Button onPress={signOut} title="Sign Out" />;
};

const Home = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <SignOutButton />
      <StatusBar />
    </SafeAreaProvider>
  );
};

export default Home;
