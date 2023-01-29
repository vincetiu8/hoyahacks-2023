import { Pressable, StyleSheet, Text, View } from "react-native";

export default function BetterButton({ onPress, text }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#cc9cff",
    padding: 15,
    margin: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
});
