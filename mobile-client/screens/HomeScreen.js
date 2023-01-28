import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#cc9cff",
    padding: 15,
    borderRadius: 50,
    margin: 5,
  },
  text: {
    fontSize: 32,
    color: "white",
  },
  textInput: {
    fontSize: 32,
    color: "#cc9cff",
  },
  bubble: {
    padding: 15,
    borderRadius: 50,
    borderColor: "#cc9cff",
    borderStyle: "solid",
    borderWidth: 2,
    margin: 5,
    minWidth: 300,
  },
});
