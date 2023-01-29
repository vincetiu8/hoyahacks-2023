import { Camera, CameraType } from "expo-camera";
import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BetterButton from "../components/BetterButton";
import { WorkoutsContext } from "../contexts/WorkoutsContext";

export default function CameraScreen({ route, navigation }) {
  const { workouts, setWorkouts } = useContext(WorkoutsContext);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  let camera;

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          We need your permission to use the camera
        </Text>
        <BetterButton onPress={requestPermission()} text="Grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const takePhoto = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync({
      base64: true,
    });
    const newWorkouts = [...workouts];
    for (const workout of newWorkouts) {
      if (workout.id !== route.params.id) continue;
      workout.image = photo.uri;
      console.log(workout.image);
    }
    setWorkouts(newWorkouts);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <BetterButton text="Flip Camera" onPress={toggleCameraType} />
      <View style={styles.outerCam}>
        <Camera
          style={styles.camera}
          type={type}
          ref={(r) => {
            camera = r;
          }}
        />
      </View>
      <BetterButton text="Take Photo" onPress={takePhoto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bca0dc",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginVertical: 5,
    fontFamily: "Staatliches-Regular",
  },
  outerCam: {
    width: 300,
    height: 600,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 5,
  },
  camera: { flex: 1 },
  buttonContainer: { alignSelf: "flex-end" },
});
