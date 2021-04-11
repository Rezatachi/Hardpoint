import React from "react";
import { Text, Container, Box, Button } from "@chakra-ui/react";
import { GoArrowRight } from "react-icons/go";
const Main = () => {
  return (
    <Box minH="100vh">
      <Container maxW="container.xl" pt="20">
        <Text fontSize="6xl">
          <Text
            bgGradient="linear(to-l, #f7fff7,#4ecdc4)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="bold"
          >
            World's Fastest
          </Text>{" "}
          Gaming Review Web App of the Current Decade.
        </Text>
        <Button
          rightIcon={<GoArrowRight />}
          size="lg"
          mt="4"
          colorScheme="teal"
        >
          Learn More
        </Button>
      </Container>
    </Box>
  );
};

export default Main;
