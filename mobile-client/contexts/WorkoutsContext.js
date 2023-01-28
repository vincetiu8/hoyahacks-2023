import React from "react";

export const tempWorkouts = [
  {
    id: 1,
    members: ["Jungkook", "V"],
    startTime: Date.now() - 1000 * 3600 * 2,
    endTime: Date.now() - 1000 * 3600,
    location: "Dodge Gym",
    type: "Arms",
    image:
      "https://6.viki.io/image/9752303b9e5c4e5a89512ad10e19e98e.jpeg?s=900x600&e=t",
  },
  {
    id: 2,
    members: ["Anya", "Vince"],
    startTime: Date.now(),
    endTime: Date.now() + 1000 * 3600,
    location: "Hoya Gym",
    type: "Legs",
    image: null,
  },
  {
    id: 3,
    members: ["Lucia", "Teri"],
    startTime: Date.now() + 1000 * 3600 * 2,
    endTime: Date.now() + 1000 * 3600 * 3,
    location: "Hacker Gym",
    type: "Cardio",
    image: null,
  },
];

export const WorkoutsContext = React.createContext({
  workouts: tempWorkouts,
  setWorkouts: (value) => {},
});
