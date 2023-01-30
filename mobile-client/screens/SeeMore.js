import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { useContext, useState } from "react";
import BetterButton from "../components/BetterButton";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { WorkoutsContext } from "../contexts/WorkoutsContext";
import { Picker } from "@react-native-picker/picker";

export default function SeeMore({ navigation, route }) {
  const { workouts, setWorkouts } = useContext(WorkoutsContext);

  const workout = workouts[route.params.id - 1];

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>About This Workout</Text>
      </View>
      <View>
        <Text style={styles.text}>Members: {workout.members.join(", ")}</Text>
        <Text style={styles.text}>Location: {workout.location}</Text>
        <Text style={styles.text}>Type: {workout.type}</Text>
        <Text style={styles.text}>Workout Plan: {workout.workoutPlan}</Text>
        <Text style={styles.text}>Notes: {workout.notes}</Text>
        <BetterButton onPress={() => navigation.navigate("Home")} text="Done" />
        <View style={styles.space} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  space: {
    height: 700,
  },
  dropdownContainer: {
    maxWidth: 150,
  },
  rowContainer: {
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 50,
  },
  header: {
    backgroundColor: "#cc9cff",
  },
  title: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 100,
    marginLeft: 30,
    fontFamily: "Staatliches-Regular",
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
    fontFamily: "Staatliches-Regular",
  },
  textInputArea: {
    fontSize: 32,
    color: "purple",
    paddingVertical: 15,
  },
  text: {
    fontSize: 32,
    color: "black",
    marginLeft: 30,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: "Staatliches-Regular",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 30,
    marginBottom: 10,
    marginTop: 10,
  },
});
