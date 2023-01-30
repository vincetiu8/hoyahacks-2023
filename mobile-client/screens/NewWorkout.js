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

export default function NewWorkout({ navigation }) {
  const { workouts, setWorkouts } = useContext(WorkoutsContext);

  const [startTime, setStartTime] = useState(new Date(Date.now()));
  const [endTime, setEndTime] = useState(new Date(Date.now() + 1000 * 3600));
  const [type, setType] = useState("");
  const [openType, setOpenType] = useState(false);
  const [location, setLocation] = useState("");
  const [workoutPlan, setWorkoutPlan] = useState("");
  const [notes, setNotes] = useState("");

  const onCreateWorkout = () => {
    const newWorkouts = [...workouts];
    newWorkouts.push({
      id: workouts.length + 1,
      members: ["Me"],
      startTime: startTime,
      endTime: endTime,
      type: type,
      location: location,
      workoutPlan: workoutPlan,
      notes: notes,
      image: null,
    });
    setWorkouts(newWorkouts);
    navigation.navigate("Home");
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Start Your Workout</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>Start Time</Text>
          <RNDateTimePicker
            mode="time"
            value={startTime}
            onChange={(_, time) => setStartTime(time)}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>End Time</Text>
          <RNDateTimePicker
            mode="time"
            value={endTime}
            onChange={(_, time) => setEndTime(time)}
          />
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.text}>Workout Type</Text>
          <Picker
            selectedValue={type}
            onValueChange={(itemValue, itemIndex) => setType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Arms" value="Arms" />
            <Picker.Item label="Abs" value="Abs" />
            <Picker.Item label="Legs" value="Legs" />
            <Picker.Item label="Cardio" value="Cardio" />
          </Picker>
        </View>
        <TextInput
          multiline
          rows={3}
          style={styles.textInputArea}
          placeholder="Location"
          value={location}
          onChangeText={setLocation}
        />
        <TextInput
          multiline
          rows={3}
          style={styles.textInputArea}
          placeholder="Workout Plan"
          value={workoutPlan}
          onChangeText={setWorkoutPlan}
        />
        <TextInput
          multiline
          rows={3}
          style={styles.textInputArea}
          placeholder="Notes"
          value={notes}
          onChangeText={setNotes}
        />
      </View>
      <BetterButton onPress={onCreateWorkout} text="Done" />
      <View style={styles.space}></View>
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
  picker: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 50,
  },
  header: {
    backgroundColor: "#cc9cff",
  },
  body: {
    padding: 20,
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
