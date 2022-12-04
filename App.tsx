import useCachedResources from "./hooks/useCachedResources";
import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react-native";
import config from "./src/aws-exports";
import { I18n } from "aws-amplify";
import { translations } from "@aws-amplify/ui";
import NavigationWrapper from "./src/NavigationWrapper";

Amplify.configure(config);
I18n.putVocabularies(translations);
I18n.setLanguage("fr");

const App = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Authenticator.Provider>
        <Authenticator>
          <NavigationWrapper />
        </Authenticator>
      </Authenticator.Provider>
    );
  }
};

export default App;
