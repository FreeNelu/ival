import React from "react";
import { View } from "react-native";
import CustomCard from "../../components/CustomCard/CustomCard";
import { RootTabScreenProps } from "../../types";
import styles from "./HomeScreen.styles";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <CustomCard
        onPress={() => {}}
        title={"Chantiers"}
        widthPercent={0.3}
        imageSource={{
          uri: "https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        }}
      />
    </View>
  );
}
