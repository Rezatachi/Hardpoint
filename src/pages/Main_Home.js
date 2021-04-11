import React from "react";
import {
  Text,
  Container,
  Box,
  Button,
  Stack,
  Grid,
  Center,
} from "@chakra-ui/react";
import { GoArrowRight, GoGithubAction } from "react-icons/go";
import { Link } from "react-router-dom";
import Wave from "../main_components/Wave";
const Main = () => {
  return (
    <Box minH="170vh">
      <Wave />
      <Container maxW="container.xl" pt="20">
        <Text fontSize="7xl" fontWeight="semibold">
          <Text
            bgGradient="linear(to-l, #f7fff7,#4ecdc4)"
            bgClip="text"
            fontSize="7xl"
            fontWeight="bold"
          >
            World's Fastest
          </Text>
          Gaming Review Web App of the Current Decade.
        </Text>

        <Stack mt="4" spacing={5} direction="row" align="center">
          <Link to="/games">
            <Button rightIcon={<GoArrowRight />} size="lg" colorScheme="teal">
              Learn More
            </Button>
          </Link>
          <Button
            leftIcon={<GoGithubAction />}
            size="lg"
            colorScheme="teal"
            variant="outline"
          >
            Github
          </Button>
        </Stack>
      </Container>
      <Wave />
      <Container maxW="100%" mt="22rem" px="7rem">
        <Center mb="10rem">
          <Text fontSize="5xl" fontWeight="extrabold">
            Fetching data from all platforms including...{" "}
          </Text>
        </Center>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <Center w="100%" h="240" bgColor="#4cc9f0">
            <Text fontSize="4xl" fontWeight="extrabold">
              Steam
            </Text>
          </Center>

          <Center w="100%" h="240" bgColor="#a9bcd0">
            <Text fontSize="4xl" fontWeight="extrabold">
              iOS/Androidd
            </Text>
          </Center>

          <Center w="100%" h="240" bgColor="#f0c808">
            <Text fontSize="4xl" fontWeight="extrabold">
              XBOX
            </Text>
          </Center>

          <Center w="100%" h="240" bgColor="#00509d">
            <Text fontSize="4xl" fontWeight="extrabold">
              Playstation
            </Text>
          </Center>

          <Center w="100%" h="240" bgColor="#cae9ff">
            <Text fontSize="4xl" fontWeight="extrabold">
              Nintendo
            </Text>
          </Center>
        </Grid>
      </Container>
    </Box>
  );
};

export default Main;
