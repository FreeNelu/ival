import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Card: {
    borderWidth: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Shadow: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 24,
    backgroundColor: "black",
    opacity: 0.3,
  },
  Image: {
    borderRadius: 24,
  },
  Title: {
    position: "absolute",
    fontWeight: "bold",
    color: "white",
  },
  Description: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 96,
  },
});

export default styles;
