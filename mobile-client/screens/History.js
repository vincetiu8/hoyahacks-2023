import {
    Button,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    FlatList
  } from "react-native";
  
import WorkoutView from "../components/WorkoutView";
import { WorkoutsContext } from "../contexts/WorkoutsContext";
import { useContext, useEffect } from "react";
  

const image = require("../assets/gymbackground.png");

export default function History({navigation}) {
    const { workouts, setWorkouts } = useContext(WorkoutsContext);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>Workout History</Text>
                <View style = {styles.category_list}>
                    <View style={styles.category}>
                    <FlatList
                        containerStyle={styles.otherContainer}
                        data={workouts}
                        renderItem={({ item }) => <WorkoutView workout={item} />}
                    />
                    </View>
                    <Pressable onPress={() => navigation.navigate("Home")}>
                        <View style={styles.button}>
                        <Text style={styles.buttonText}>Back</Text>
                        </View>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"cc9cff"
    },

    image: {
        flex: 1,
        justifyContent: 'center'},

    category_list: {
        flex: 1,
        alignItems: "center",

      },
    header: {
        backgroundColor: "#cc9cff"
    },
    category: {
        marginTop: 20,
        height: 400,
        width: 300,
        borderRadius: 50
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
    rectangle: {
        backgroundColor: "black",
        height: 150,
        width: 220,
        margin: 40,
        marginTop: 20
    },
    button: {
      backgroundColor: "white",
      borderRadius: 10,
      height: 50,
      width: 150,
      marginTop: 20
      
    },
    text: {
        fontSize: 30,
        color: "black",
        marginLeft: 40,
        marginBottom: 10,
        marginTop: 30
      },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginTop:12
      }
  });