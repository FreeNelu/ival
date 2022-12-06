/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: "1",
              ChantierScreen: "1.1",
            },
          },
          Chat: {
            screens: {
              ChatScreen: "2",
            },
          },
          General: {
            screens: {
              GeneralScreen: "3",
            },
          },
          Notification: {
            screens: {
              Notification: "4",
            },
          },
          Publication: {
            screens: {
              Publication: "5",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
