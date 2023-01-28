import {
  Button,
  Pressable,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="username"
        style={styles.textInput}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="password"
        style={styles.textInput}
      />
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
  textInput: {
    fontSize: 32,
    color: "purple",
  },
});
