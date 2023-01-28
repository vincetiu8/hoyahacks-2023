import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import { tempWorkouts, WorkoutsContext } from "./contexts/WorkoutsContext";
import NewWorkout from "./screens/NewWorkout";

const Stack = createNativeStackNavigator();

export default function App() {
  const [workouts, setWorkouts] = useState(tempWorkouts);
  const value = { workouts, setWorkouts };

  return (
    <WorkoutsContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewWorkout" component={NewWorkout} />
        </Stack.Navigator>
      </NavigationContainer>
    </WorkoutsContext.Provider>
  );
}
