import {
    Button,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View,
  } from "react-native";


export default function Workout({ navigation}) {
    return (
        <View style={styles.container}>
            <View style = {styles.header}>
                <Text style={styles.title}>Josh's Workout</Text>
            </View>
            <View style = {styles.body}>
                <Text style={styles.text}>Target Hit</Text>
                <Text style={styles.text}>Location</Text>
                <Text style={styles.text}>Workout Plan</Text>
            </View>
            <Pressable onPress={() => navigation.navigate("Home")}>
                <View style={styles.button}>
                <Text style={styles.buttonText}>Back</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    header: {
        backgroundColor: "#cc9cff"
    },
    body: {
        marginTop: 20,
    },
    title: {
      fontSize: 50,
      color: "white",
      fontWeight: "bold",
      marginBottom: 20,
      marginTop: 100,
      marginLeft: 30,
      marginRight: 30
    },
    button: {
      backgroundColor: "#cc9cff",
      padding: 10,
      borderRadius: 10,
      margin: 20,
    },
    textInput: {
      fontSize: 32,
      color: "purple",
    },
    text: {
        fontSize: 32,
        color: "black",
        marginLeft: 30,
        marginBottom: 10,
        marginTop: 10
      },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 30,
        marginBottom: 10,
        marginTop: 10
      }
  });