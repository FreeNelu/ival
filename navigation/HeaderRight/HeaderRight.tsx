import { useAuthenticator } from "@aws-amplify/ui-react-native";
import React from "react";
import IconPressable from "../../components/IconPressable";
import useColorScheme from "../../hooks/useColorScheme";
import styles from "./HeaderRight.styles";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import Colors from "../../constants/Colors";
import { Icon } from "@rneui/themed";

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
          <Icon
            size={32}
            type={"material"}
            color={Colors[colorScheme].cardText}
            name="logout"
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
          <Icon
            size={32}
            type={"material"}
            style={{ marginRight: 24 }}
            color={Colors[colorScheme].cardText}
            name="info-outline"
          />
        }
      />
      <SignOutPressable />
    </View>
  );
};

export default HeaderRight;
