import React, { useState } from "react";
import { Icon, Text } from "@rneui/themed";
import {
  LayoutAnimation,
  Pressable,
  StyleProp,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";
import styles from "./SiteCard.styles";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import IconPressable from "../IconPressable";

type CustomCardProps = {
  style?: StyleProp<ViewStyle>;
  name: string;
  leader: string;
};

const LayoutAnimationConfig = {
  duration: 1000,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.opacity,
    springDamping: 1,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.6,
  },
};

const SiteCard = (props: CustomCardProps) => {
  const { style, name, leader } = props;
  const colorScheme = useColorScheme();
  const { width } = useWindowDimensions();
  const cardWidth = width * 0.75;
  const [pressed, setPressed] = useState(false);

  const onPress = () => {
    setPressed(!pressed);
    LayoutAnimation.configureNext(LayoutAnimationConfig);
  };

  return (
    <View
      style={[
        styles.Card,
        {
          width: cardWidth,
          backgroundColor: Colors[colorScheme].background,
        },
        style,
      ]}
    >
      <Text style={[styles.Name, { color: Colors[colorScheme].text }]}>
        {`Chantier "${name}"`}
      </Text>
      <Text style={[styles.Text, { color: Colors[colorScheme].text }]}>
        {`Chef: ${leader}`}
      </Text>
      {pressed && (
        <>
          <Text style={[styles.Name, { color: Colors[colorScheme].text }]}>
            {`Chantier "${name}"`}
          </Text>
          <Text style={[styles.Text, { color: Colors[colorScheme].text }]}>
            {`Chef: ${leader}`}
          </Text>
        </>
      )}
      <IconPressable
        title="Collapse/Reveal"
        style={styles.CollapseIcon}
        onPress={onPress}
        icon={
          <Icon
            size={36}
            type={"material"}
            color={Colors[colorScheme].text}
            name={`keyboard-arrow-${pressed ? "up" : "down"}`}
          />
        }
      />
    </View>
  );
};

export default SiteCard;
