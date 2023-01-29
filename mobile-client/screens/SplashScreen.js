import {
  Button,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/gymbackground.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logocss} />
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    resizeMode: "cover",
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontFamily: "Staatliches-Regular",
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
    fontFamily: "Staatliches-Regular",
  },
  logocss: {
    width: 200,
    height: 200,
    textAlign: "center",
  },
});
