import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import React from "react";
import Navigation from "./navigation";
import { Amplify, I18n } from "aws-amplify";
import config from "./src/aws-exports";
import { signUpConfig } from "./src/signUpConfig";

import {
  withAuthenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react-native";
import { Button } from "react-native";

Amplify.configure(config);
I18n.setLanguage("fr");

const SignOutButton = () => {
  const { signOut } = useAuthenticator();
  return <Button onPress={signOut} title="Sign Out" />;
};

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <SignOutButton />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
};

export default withAuthenticator(App);
