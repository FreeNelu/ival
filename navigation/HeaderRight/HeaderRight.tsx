import { useAuthenticator } from "@aws-amplify/ui-react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import IconPressable from "../../components/IconPressable";
import useColorScheme from "../../hooks/useColorScheme";
import styles from "./HeaderRight.styles";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import Colors from "../../constants/Colors";

const HeaderRight = () => {
  const { signOut } = useAuthenticator();
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const SignOutPressable = () => {
    return (
      <IconPressable
        title="Sign out"
        onPress={signOut}
        icon={
          <MaterialIcons
            name="logout"
            size={32}
            color={Colors[colorScheme].cardText}
            style={{ marginRight: 24 }}
          />
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <IconPressable
        title="Help"
        onPress={() => navigation.navigate("Modal")}
        icon={
          <MaterialIcons
            name="info-outline"
            size={32}
            color={Colors[colorScheme].cardText}
            style={{ marginRight: 24 }}
          />
        }
      />
      <SignOutPressable />
    </View>
  );
};

export default HeaderRight;
