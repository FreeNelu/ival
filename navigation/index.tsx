import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "@rneui/themed";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import NotificationScreen from "../screens/NotificationScreen";
import GeneralScreen from "../screens/GeneralScreen";
import PublicationScreen from "../screens/PublicationScreen";
import { RootStackParamList, RootTabParamList } from "../types";
import HeaderRight from "./HeaderRight/HeaderRight";

export default function Navigation() {
  return (
    <NavigationContainer>
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
        headerStyle: {
          borderBottomStartRadius: 24,
          borderBottomEndRadius: 24,
          backgroundColor: Colors[colorScheme].accent,
          shadowRadius: 6,
        },
        tabBarStyle: {
          borderTopWidth: 1,
        },
        headerTitleStyle: {
          color: "white",
          fontSize: 24,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Accueil",
          tabBarLabelStyle: styles.TabLabel,
          tabBarIcon: ({ color }) => (
            <Icon
              size={36}
              type={"antdesign"}
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
          tabBarLabelStyle: styles.TabLabel,
          tabBarIcon: ({ color }) => (
            <Icon
              size={36}
              type={"ionicon"}
              style={styles.TabIcon}
              color={color}
              name="chatbox-ellipses-outline"
            />
          ),
          headerRight: () => <HeaderRight />,
        }}
      />
      <BottomTab.Screen
        name="General"
        component={GeneralScreen}
        options={{
          title: "Generales",
          tabBarIcon: ({ focused }) => (
            <Icon
              reverse={focused}
              raised={!focused}
              size={36}
              type={"font-awesome-5"}
              style={styles.LogoIcon}
              color={Colors[colorScheme].accent}
              name="info"
            />
          ),
          headerRight: () => <HeaderRight />,
          tabBarLabel: "",
          tabBarItemStyle: styles.LogoContainer,
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: "Notification",
          tabBarLabelStyle: styles.TabLabel,
          tabBarIcon: ({ color }) => (
            <Icon
              size={36}
              type={"ionicon"}
              style={styles.TabIcon}
              color={color}
              name="notifications-outline"
            />
          ),
          headerRight: () => <HeaderRight />,
        }}
      />
      <BottomTab.Screen
        name="Publication"
        component={PublicationScreen}
        options={{
          title: "Publication",
          tabBarLabelStyle: styles.TabLabel,
          tabBarIcon: ({ color }) => (
            <Icon
              size={36}
              type={"antdesign"}
              style={styles.TabIcon}
              color={color}
              name="book"
            />
          ),
          headerRight: () => <HeaderRight />,
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  TabIcon: { width: 36 },
  TabLabel: { fontSize: 18 },
  LogoIcon: { width: 48 },
  LogoContainer: { marginLeft: 18, marginBottom: 36 },
});
