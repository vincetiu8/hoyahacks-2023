import {
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  View,
  Pressable,
} from "react-native";
import WorkoutView from "../components/WorkoutView";
import { WorkoutsContext } from "../contexts/WorkoutsContext";
import { useContext, useEffect } from "react";

export default function HomeScreen({ navigation }) {
  const { workouts, setWorkouts } = useContext(WorkoutsContext);

  useEffect(() => {
    console.log(workouts);
  }, [workouts]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PictoGym</Text>
      <FlatList
        containerStyle={styles.container}
        data={workouts}
        renderItem={({ item }) => <WorkoutView workout={item} />}
      />
      <Pressable
        style={styles.plusButtonContainer}
        onPress={() => navigation.navigate("NewWorkout")}
      >
        <Text style={styles.plusText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  plusButtonContainer: {
    position: "absolute",
    backgroundColor: "#cc9cff",
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  barContainer: {
    flex: 1,
    backgroundColor: "grey",
  },
  title: {
    fontSize: 64,
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
  image: {
    width: 200,
    height: 200,
    fit: "fill",
  },
});
