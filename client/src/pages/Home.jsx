import { Container, Flex, Title } from "@mantine/core";
import WorkoutList from "../components/WorkoutList";

export default function Home() {
  return (
    <Flex direction="column" p="xl" align="center">
      <Container size="xl">
        <Title order={1}>Good morning, let's get this bread!</Title>
      </Container>
      <Flex direction="column" p="md">
        <Title order={2}>Join a workout session:</Title>
        <WorkoutList />
      </Flex>
    </Flex>
  );
}
