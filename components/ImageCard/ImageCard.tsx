import React from "react";
import { Text } from "@rneui/themed";
import {
  ImageBackground,
  Pressable,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import styles from "./ImageCard.styles";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";

type CustomCardProps = {
  style?: StyleProp<ViewStyle>;
  title: string;
  description?: string;
  imageSource: any;
  width: number;
  height: number;
  onPress: () => void;
};

const ImageCard = (props: CustomCardProps) => {
  const { style, title, description, onPress, width, height, imageSource } =
    props;
  const colorScheme = useColorScheme();

  return (
    <Pressable onPress={onPress} style={style}>
      <ImageBackground
        source={imageSource}
        imageStyle={styles.Image}
        blurRadius={8}
      >
        <View style={styles.Shadow} />
        <View style={[styles.Card, { width: width, height: height }]}>
          {description && (
            <>
              <Text
                style={[
                  styles.Description,
                  { color: Colors[colorScheme].cardDescription },
                ]}
              >
                {description}
              </Text>
            </>
          )}
          <Text
            h1
            style={[styles.Title, { color: Colors[colorScheme].cardText }]}
          >
            {title}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default ImageCard;
