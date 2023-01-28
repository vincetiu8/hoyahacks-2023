import { StyleSheet, Text, ScrollView, FlatList, View } from "react-native";
import WorkoutView from "../components/WorkoutView";
import { WorkoutsContext } from "../contexts/WorkoutsContext";
import { useContext } from "react";

export default function HomeScreen({ route }) {
  const context = useContext(WorkoutsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PictoGym</Text>
      <FlatList
        containerStyle={styles.container}
        data={context}
        renderItem={({ item }) => <WorkoutView workout={item} />}
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
