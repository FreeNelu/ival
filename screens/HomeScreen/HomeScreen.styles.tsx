import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 48,
    marginRight: 48,
  },
  CardContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  Card: { marginTop: 16, marginBottom: 16 },
});

export default styles;
