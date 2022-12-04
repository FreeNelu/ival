import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { RootStackParamList, RootTabParamList } from "../types";
import HeaderRight from "./HeaderRight/HeaderRight";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Accueil",
          tabBarIcon: ({ color }) => (
            <AntDesign
              size={32}
              style={styles.TabIcon}
              color={color}
              name="home"
            />
          ),
          headerRight: () => <HeaderRight />,
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: "Messagerie",
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={32}
              style={styles.TabIcon}
              color={color}
              name="chatbox-ellipses-outline"
            />
          ),
          headerRight: () => <HeaderRight />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Test",
          tabBarIcon: ({ color }) => (
            <AntDesign
              size={32}
              style={styles.TabIcon}
              color={color}
              name="minussquareo"
            />
          ),
          headerRight: () => <HeaderRight />,
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  TabIcon: { marginLeft: -4, marginBottom: 4 },
});
