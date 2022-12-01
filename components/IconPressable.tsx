import React from "react";
import { Pressable } from "react-native";

type IconPressableProps = {
  title?: string;
  icon: React.ReactNode;
  onPress: () => void;
};

const IconPressaable = (props: IconPressableProps) => {
  const { title, icon, onPress } = props;
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      {icon}
    </Pressable>
  );
};

export default IconPressaable;
