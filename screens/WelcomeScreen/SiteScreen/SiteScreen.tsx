import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { RootStackScreenProps } from "../../../types";
import { FAB, Text } from "@rneui/themed";
import styles from "./SiteScreen.styles";
import SiteCard from "../../../components/SiteCard/SiteCard";
import Colors from "../../../constants/Colors";
import useColorScheme from "../../../hooks/useColorScheme";

const MockData = [
  { name: "Victor Hugo", leader: "Nelu Maciuca" },
  { name: "NYC", leader: "Ion Popescu" },
  { name: "Paris", leader: "Mihai Eminescu" },
  { name: "Tokyo", leader: "Ion Creanga" },
];

const SiteScreen = ({ navigation }: RootStackScreenProps<"Site">) => {
  const colorScheme = useColorScheme();

  const renderItem = ({ item }: any) => (
    <SiteCard style={styles.SiteCard} name={item.name} leader={item.leader} />
  );

  return (
    <SafeAreaView style={styles.Container}>
      <FlatList
        contentContainerStyle={styles.CardContainer}
        data={MockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.FabContainer}>
        <FAB
          icon={{ name: "delete", color: "white" }}
          color="red"
          size="large"
          style={styles.Fab}
        />
        <FAB
          icon={{ name: "add", color: "white" }}
          color={Colors[colorScheme].accent}
          size="large"
          style={styles.Fab}
        />
      </View>
    </SafeAreaView>
  );
};

export default SiteScreen;
