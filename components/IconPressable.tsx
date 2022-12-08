import React from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";

type IconPressableProps = {
  title?: string;
  style?: StyleProp<ViewStyle>;
  icon: React.ReactNode;
  onPress: () => void;
};

const IconPressable = (props: IconPressableProps) => {
  const { title, style, icon, onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        style,
      ]}
    >
      {icon}
    </Pressable>
  );
};

export default IconPressable;
