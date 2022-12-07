import React from "react";
import { SafeAreaView } from "react-native";
import { RootStackScreenProps } from "../../../types";
import { Text } from "@rneui/themed";
import styles from "./SiteScreen.styles";

const SiteScreen = ({ navigation }: RootStackScreenProps<"Site">) => {
  return (
    <SafeAreaView style={styles.Container}>
      <Text>Chantiers...</Text>
    </SafeAreaView>
  );
};

export default SiteScreen;
