import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import { tempWorkouts, WorkoutsContext } from "./contexts/WorkoutsContext";
import { useFonts } from 'expo-font';
import NewWorkout from "./screens/NewWorkout";
import History from "./screens/History";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Staatliches-Regular': require('./assets/fonts/Staatliches-Regular.ttf'),
  });
  const [workouts, setWorkouts] = useState(tempWorkouts);
  const value = { workouts, setWorkouts };

  if (!fontsLoaded) {
    return "";
  }

  return (
    <WorkoutsContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="History"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </WorkoutsContext.Provider>
  );
}
