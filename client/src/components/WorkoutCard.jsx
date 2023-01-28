import { Container, Flex, Image, Text } from "@mantine/core";

export default function WorkoutCard({ workout }) {
  const { startTime, endTime, members, type } = workout;
  const startTimeDate = new Date(startTime);
  const endTimeDate = new Date(endTime);
  let workoutImageSrc = "";
  switch (type) {
    case "abs":
      workoutImageSrc =
        "https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-abs.png";
      break;
    case "arms":
      workoutImageSrc =
        "https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-arms.png";
      break;
    case "back":
      workoutImageSrc =
        "https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-back.png";
      break;
    case "chest":
      workoutImageSrc =
        "https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-chest.png";
      break;
    case "legs":
      workoutImageSrc =
        "https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-legs.png";
      break;
    case "shoulders":
      workoutImageSrc =
        "https://www.muscleandfitness.com/wp-content/themes/muscle-and-fitness/assets/build/images/body-parts/body-part-shoulders.png";
      break;
    case "cardio":
      workoutImageSrc =
        "https://media.istockphoto.com/id/1334140079/photo/male-runner-doing-fitness-workout-athlete-exercising-over-an-orange-background.jpg?b=1&s=170667a&w=0&k=20&c=6kInqD_Utw71CXrRbCIr5ZLhPyqJcY52p2IjrrouSwo=";
  }

  return (
    <Flex>
      <Flex direction="column">
        <Text>{members.map((member) => member.name).join(", ")}</Text>
        <Text>
          {startTimeDate.getHours() +
            ":" +
            startTimeDate.getMinutes() +
            " - " +
            endTimeDate.getHours() +
            ":" +
            endTimeDate.getMinutes()}
        </Text>
      </Flex>
      <Image src={workoutImageSrc} width={200} height={200} />
    </Flex>
  );
}
