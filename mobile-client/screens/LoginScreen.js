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

export default function LoginScreen({ navigation }) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
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
          <Text style={styles.text}>Login</Text>
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
    fontFamily: 'Staatliches-Regular',
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
    fontFamily: 'Staatliches-Regular',
  },
  textInput: {
    fontSize: 32,
    color: "#cc9cff",
    fontFamily: 'Staatliches-Regular',
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
