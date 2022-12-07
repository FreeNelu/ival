import React from "react";
import { SafeAreaView, useWindowDimensions } from "react-native";
import { ScrollView, View } from "react-native";
import WelcomeCards from "./WelcomeCards";
import styles from "./WelcomeScreen.styles";

const WelcomeScreen = () => {
  const { height, width } = useWindowDimensions();
  const isHorizontal = width > height;
  return (
    <SafeAreaView style={styles.Container}>
      {isHorizontal ? (
        <View style={styles.CardContainer}>
          <WelcomeCards />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={styles.CardContainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <WelcomeCards />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default WelcomeScreen;
