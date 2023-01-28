import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function WorkoutView({ navigation, workout }) {
  const { members, startTime, endTime, location, type, image } = workout;
  const timeDelta = new Date(Date.now() - endTime);
  const reverseTimeDelta = new Date(startTime - Date.now());

  return (
    <View style={styles.container}>
      {image ? (
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      ) : (
        ""
      )}

      <Text style={styles.text}> {members.join(", ")}</Text>

      {Date.now() - endTime >= 0 ? (
        <View>
          <Text style={styles.text}>
            {location},{" "}
            {timeDelta.getUTCHours() > 1
              ? timeDelta.getUTCHours() + " hours"
              : timeDelta.getUTCHours() === 1
              ? "1 hour"
              : timeDelta.getUTCMinutes() > 1
              ? timeDelta.getUTCMinutes() + " minutes"
              : timeDelta.getUTCMinutes() === 1
              ? "1 minute"
              : "a few seconds"}{" "}
            ago, {type}
          </Text>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <View style={styles.button}>
              <Text style={styles.text}>See more</Text>
            </View>
          </Pressable>
        </View>
      ) : (
        <View>
          <Text style={styles.text}>
            {location},{" "}
            {Date.now() > startTime
              ? "ongoing"
              : "starting in " +
                (reverseTimeDelta.getUTCHours() > 1
                  ? reverseTimeDelta.getUTCHours() + " hours"
                  : reverseTimeDelta.getUTCHours() === 1
                  ? "1 hour"
                  : reverseTimeDelta.getUTCMinutes() > 1
                  ? reverseTimeDelta.getUTCMinutes() + " minutes"
                  : reverseTimeDelta.getUTCMinutes() === 1
                  ? "1 minute"
                  : "a few seconds")}
          </Text>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <View style={styles.button}>
              <Text style={styles.text}>Join workout</Text>
            </View>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 5,
    borderRadius: 15,
  },
  barContainer: {
    flex: 1,
    backgroundColor: "grey",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#cc9cff",
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
    margin: 5,
    alignSelf: "center",
  },
  text: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginVertical: 5,
  },
  textInput: {
    fontSize: 32,
    color: "#cc9cff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
});
