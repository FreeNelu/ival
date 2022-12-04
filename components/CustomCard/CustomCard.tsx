import React from "react";
import { Card, Text } from "@rneui/themed";
import { ImageBackground, Pressable, useWindowDimensions } from "react-native";
import styles from "./CustomCard.styles";

type CustomCardProps = {
  title: string;
  description?: string;
  imageSource: { uri: string };
  widthPercent: number;
  onPress: () => void;
};

const CustomCard = (props: CustomCardProps) => {
  const { title, description, onPress, widthPercent, imageSource } = props;
  const { height, width } = useWindowDimensions();
  const cardWidth = Math.max(height, width) * widthPercent;
  const cardHeight = cardWidth * (294 / 425);

  return (
    <Pressable onPress={onPress}>
      <ImageBackground source={imageSource} imageStyle={styles.Image}>
        <Card
          containerStyle={[
            styles.Card,
            { width: cardWidth, height: cardHeight },
          ]}
        >
          <Card.Title style={styles.Title}>{title}</Card.Title>
          {description && (
            <>
              <Card.Divider />
              <Text style={{ marginBottom: 10 }}>{description}</Text>
            </>
          )}
        </Card>
      </ImageBackground>
    </Pressable>
  );
};

export default CustomCard;
