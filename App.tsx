import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "react-native";
import Navigation from "./navigation";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import React from "react";

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

import config from "./src/aws-exports";
import { signUpConfig } from "./src/signUpConfig";

Amplify.configure(config);

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
      <Authenticator.Provider>
        <Authenticator>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <SignOutButton />
            <StatusBar />
          </SafeAreaProvider>{" "}
        </Authenticator>
      </Authenticator.Provider>
    );
  }
};

export default App;
