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
      <Pressable onPress={() => navigation.navigate("Signup")}>
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
    backgroundColor: "#CBC3E3",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#A020F0",
    padding: 15,
    borderRadius: 50,
    margin: 5,
  },
  text: {
    fontSize: 32,
    color: "white",
  },
});
