import {
  Button,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useState } from "react";

export default function SignupScreen({ navigation }) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={require("../assets/gymbackground.png")}
      style={styles.background}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>
          <View style={styles.bubble}>
            <TextInput
              value={text}
              onChangeText={setText}
              placeholder="username"
              style={styles.textInput}
            />
          </View>
          <View style={styles.bubble}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholder="password"
              style={styles.textInput}
            />
          </View>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <View style={styles.button}>
              <Text style={styles.text}>Sign Up</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
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
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Staatliches-Regular",
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
    fontFamily: "Staatliches-Regular",
  },
  textInput: {
    fontSize: 32,
    color: "#cc9cff",
    fontFamily: "Staatliches-Regular",
  },
  bubble: {
    padding: 15,
    borderRadius: 50,
    borderColor: "#cc9cff",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 2,
    margin: 5,
    minWidth: 300,
  },
});
