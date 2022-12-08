import React from "react";
import ImageCard from "../../components/ImageCard/ImageCard";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import styles from "./WelcomeScreen.styles";

const WelcomeCards = () => {
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();
  const isHorizontal = width > height;
  const cardWidth = width * (isHorizontal ? 0.4 : 0.75);
  const cardHeight = cardWidth * (1 / 1.75);
  const chantierImg = require("../../assets/images/chantiers-img.jpg");
  const equipesImg = require("../../assets/images/equipes-img.png");
  const materielImg = require("../../assets/images/materiel-img.jpg");
  const materiauxImg = require("../../assets/images/materiaux-img.png");

  return (
    <>
      <ImageCard
        style={styles.Card}
        onPress={() => {
          navigation.navigate("Site");
        }}
        title={"Chantiers"}
        description={"Liste des"}
        width={cardWidth}
        height={cardHeight}
        imageSource={chantierImg}
      />
      <ImageCard
        style={styles.Card}
        onPress={() => {}}
        title={"Équipes"}
        description={"Gérer vos"}
        width={cardWidth}
        height={cardHeight}
        imageSource={equipesImg}
      />
      <ImageCard
        style={styles.Card}
        onPress={() => {}}
        title={"Matériel"}
        width={cardWidth}
        height={cardHeight}
        imageSource={materielImg}
      />
      <ImageCard
        style={styles.Card}
        onPress={() => {}}
        title={"Matériaux"}
        width={cardWidth}
        height={cardHeight}
        imageSource={materiauxImg}
      />
    </>
  );
};

export default WelcomeCards;
