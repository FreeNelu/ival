import { StyleSheet, View } from "react-native";

import { Text } from "@rneui/themed";
import { RootTabScreenProps } from "../types";

export default function ChatScreen({ navigation }: RootTabScreenProps<"Chat">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messagerie</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
