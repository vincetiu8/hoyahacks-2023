import {
  Button,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";

export default function SignupScreen({ navigation }) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  return (
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
