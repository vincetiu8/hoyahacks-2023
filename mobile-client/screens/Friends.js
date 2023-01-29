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
            <View style = {styles.subContainer}>
                <Text style={styles.title}>Connect Your Contacts To Share With Friends</Text>
                <Pressable onPress={() => navigation.navigate("Home")}>
                    <View style={styles.button}>
                    <Text style={styles.buttonText}>Carol</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Home")}>
                    <View style={styles.button}>
                    <Text style={styles.buttonText}>Molly</Text>
                    </View>
                </Pressable>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#cc9cff",
      alignItems: "center",
      justifyContent: "center"
    },
    subContainer: {
        backgroundColor: "white",
        width: 300,
        height: 500,
        borderRadius: 50,
    },
    title: {
      fontSize: 25,
      color: "black",
      fontWeight: "bold",
      margin: 30,
    },
    button: {
      backgroundColor: "#cc9cff",
      padding: 10,
      borderRadius: 30,
      margin: 10,
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
        color: "black",
        marginLeft: 30,
        marginBottom: 10,
        marginTop: 10
      }
  });