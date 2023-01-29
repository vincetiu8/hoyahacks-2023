import {
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  Image,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import WorkoutView from "../components/WorkoutView";
import { WorkoutsContext } from "../contexts/WorkoutsContext";
import { useContext, useEffect } from "react";

export default function HomeScreen({ navigation }) {
  const { workouts, setWorkouts } = useContext(WorkoutsContext);

  return (
    <ImageBackground
      source={require("../assets/gymbackground.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>PictoGym</Text>
        <FlatList
          containerStyle={styles.container}
          data={workouts}
          renderItem={({ item }) => (
            <WorkoutView workout={item} navigation={navigation} />
          )}
        />
        <Pressable
          style={styles.plusButtonContainer}
          onPress={() => navigation.navigate("NewWorkout")}
        >
          <Text style={styles.plusText}>+</Text>
        </Pressable>
        <Pressable
          style={styles.historyButtonContainer}
          onPress={() => navigation.navigate("History")}
        >
          <Image
            source={require("../assets/history-7611.png")}
            style={styles.historyImage}
          />
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
  plusButtonContainer: {
    position: "absolute",
    backgroundColor: "#efbbff",
    bottom: 25,
    right: 25,
    width: 70,
    height: 70,
    padding: 5,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  plusText: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
  historyButtonContainer: {
    position: "absolute",
    backgroundColor: "#efbbff",
    bottom: 25,
    left: 25,
    width: 70,
    height: 70,
    padding: 5,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  historyImage: {
    width: 30,
    height: 30,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 64,
    fontFamily: "Staatliches-Regular",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 50,
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
    borderStyle: "solid",
    borderWidth: 2,
    margin: 5,
    minWidth: 300,
  },
  image: {
    width: 200,
    height: 200,
    fit: "fill",
  },
});
