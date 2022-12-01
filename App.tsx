import useCachedResources from "./hooks/useCachedResources";
import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react-native";
import config from "./src/aws-exports";
import { signUpConfig } from "./src/signUpConfig";
import Home from "./src/Home";

Amplify.configure(config);

const App = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Authenticator.Provider>
        <Authenticator>
          <Home />
        </Authenticator>
      </Authenticator.Provider>
    );
  }
};

export default App;
