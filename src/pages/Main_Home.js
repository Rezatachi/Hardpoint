import React from "react";
import {
  Text,
  Container,
  Box,
  Button,
  Stack,
  Grid,
  Center,
  useColorMode,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  CircularProgress,
  Flex,
  Icon,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
import { GoArrowRight, GoGithubAction } from "react-icons/go";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { Link } from "react-router-dom";

const Main = () => {
  const { isOpen, onToggle } = useDisclosure();

  const { colorMode } = useColorMode();
  return (
    <>
      <Box maxH="300vh">
        <Container maxW="container.xl" mt="20">
          <Flex>
            <Text fontSize="7xl" fontWeight="semibold">
              <Text
                bgGradient={
                  colorMode === "light"
                    ? "linear(to-l, #4ecdc4, #23d997)"
                    : "linear(to-l, #f7fff7,#4ecdc4)"
                }
                bgClip="text"
                fontSize="7xl"
                fontWeight="bold"
              >
                World's Fastest
              </Text>
              Gaming Review Web App of the Current Decade.
            </Text>
            <CircularProgress
              isIndeterminate
              position="absolute"
              ml="50rem"
              zIndex="-1"
              value={30}
              size="1000px"
              color={colorMode === "light" ? "#4ecdc4" : "#23d997"}
            />
          </Flex>

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
        <Container maxW="100%" mt="15rem" px="7rem">
          <Center mb="10rem">
            <Text fontSize="5xl" fontWeight="extrabold">
              Fetching data from all platforms including...{" "}
            </Text>
          </Center>
          <Grid templateColumns="repeat(5, 1fr)" gap={6} color="white">
            <Center
              w="100%"
              h="240"
              bg={colorMode === "light" ? "blue.400" : "#006d77"}
              rounded="2xl"
            >
              <Text fontSize="4xl" fontWeight="extrabold">
                Steam
              </Text>
            </Center>

            <Center w="100%" h="240" bgColor="#83c5be" rounded="2xl">
              <Text fontSize="4xl" fontWeight="extrabold">
                iOS/Android
              </Text>
            </Center>

            <Center w="100%" h="240" bgColor="#ffbc42" rounded="2xl">
              <Text fontSize="4xl" fontWeight="extrabold">
                XBOX
              </Text>
            </Center>

            <Center w="100%" h="240" bgColor="#441151" rounded="2xl">
              <Text fontSize="4xl" fontWeight="extrabold">
                Playstation
              </Text>
            </Center>

            <Center w="100%" h="240" bgColor="#e29578" rounded="2xl">
              <Text fontSize="4xl" fontWeight="extrabold">
                Nintendo
              </Text>
            </Center>
          </Grid>
        </Container>
        <Container maxW="8xl" mt="10rem">
          <Heading fontSize="6xl" py="2rem">
            FAQ/Answers
          </Heading>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="4xl" fontWeight="bold">
                    What are future improvements planned for this web
                    application?
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} fontSize="2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="4xl" fontWeight="bold">
                    What API is used?
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} fontSize="2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Text fontSize="4xl" fontWeight="bold">
                    How was this web application made?
                  </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4} fontSize="2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Box>
      <Container
        roundedTop="md"
        mt="15rem"
        minH="40vh"
        maxW="100%"
        bg={colorMode === "light" ? "#23d997" : "#4ecdc4"}
        color="white"
      >
        <Center>
          <Box my="3rem" mx="5rem">
            <Stack spacing={10}>
              <Heading onClick={onToggle}>Github</Heading>
              <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
                <Box
                  p="40px"
                  color="white"
                  mt="4"
                  bg="teal.200"
                  rounded="md"
                  shadow="md"
                >
                  <Center>
                    <Heading>CURRENTLY UNDER MAINTENIENCE</Heading>
                  </Center>
                </Box>
              </Slide>
              <Heading>API</Heading>
              <Heading>Discord</Heading>
            </Stack>
          </Box>
          <Icon as={GrReactjs} w={20} h={20} mx={5} />
          <Icon as={SiRedux} w={20} h={20} mx={5} />
          <Stack>
            <Box my="2rem">
              <Heading> Site developed by Abraham Belayneh.</Heading>
              <Heading> Created with React.js and Redux</Heading>
            </Box>
          </Stack>
        </Center>
      </Container>
    </>
  );
};

export default Main;
