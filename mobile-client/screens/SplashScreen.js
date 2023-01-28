import {
  Button,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PictoGym</Text>

      <Pressable onPress={() => navigation.navigate("Login")}>
        <View style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.button}>
          <Text style={styles.text}>Sign Up</Text>
        </View>
      </Pressable>
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
    padding: 10,
    borderRadius: 10,
    margin: 5,
  },
  text: {
    fontSize: 32,
    color: "white",
  },
});
