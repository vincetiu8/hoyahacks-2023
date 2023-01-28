import { Flex } from "@mantine/core";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutList() {
  const workouts = [
    {
      startTime: 1674910800,
      endTime: 1674918000,
      members: ["Anya", "Teri"],
      type: "cardio",
    },
    {
      startTime: 1674936000,
      endTime: 1674939600,
      members: ["Lucia"],
      type: "arms",
    },
    {
      startTime: 1674946800,
      endTime: 1674950400,
      members: ["Vince"],
      type: "legs",
    },
  ];
  return (
    <Flex direction="column">
      {workouts.map((workout) => (
        <WorkoutCard workout={workout} />
      ))}
    </Flex>
  );
}
