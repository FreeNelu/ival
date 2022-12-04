import React from "react";
import { SafeAreaView, useWindowDimensions, View } from "react-native";
import CustomCard from "../../components/CustomCard/CustomCard";
import { RootTabScreenProps } from "../../types";
import styles from "./HomeScreen.styles";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const { height, width } = useWindowDimensions();
  const cardWidth = Math.max(height, width) * 0.4;
  const cardHeight = cardWidth * (1 / 1.75);
  const chantierImg = require("../../assets/images/chantiers-img.jpg");
  const equipesImg = require("../../assets/images/equipes-img.png");
  const materielImg = require("../../assets/images/materiel-img.jpg");
  const materiauxImg = require("../../assets/images/materiaux-img.png");

  return (
    <SafeAreaView style={styles.Container}>
      <View
        style={[
          styles.CardContainer,
          { justifyContent: width < height ? "center" : "space-evenly" },
        ]}
      >
        <CustomCard
          style={styles.Card}
          onPress={() => {}}
          title={"Chantiers"}
          description={"Liste des"}
          width={cardWidth}
          height={cardHeight}
          imageSource={chantierImg}
        />
        <CustomCard
          style={styles.Card}
          onPress={() => {}}
          title={"Équipes"}
          description={"Gérer vos"}
          width={cardWidth}
          height={cardHeight}
          imageSource={equipesImg}
        />
        <CustomCard
          style={styles.Card}
          onPress={() => {}}
          title={"Matériel"}
          width={cardWidth}
          height={cardHeight}
          imageSource={materielImg}
        />
        <CustomCard
          style={styles.Card}
          onPress={() => {}}
          title={"Matériaux"}
          width={cardWidth}
          height={cardHeight}
          imageSource={materiauxImg}
        />
      </View>
    </SafeAreaView>
  );
}
