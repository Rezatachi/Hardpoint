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
  chakra,
} from "@chakra-ui/react";
import { GoArrowRight, GoGithubAction } from "react-icons/go";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { Link } from "react-router-dom";
//Framer motion
import { pageAnimation, fade } from "../animation";
import { motion } from "framer-motion";

const Main = () => {
  const { isOpen, onToggle } = useDisclosure();
  const MotionBox = chakra(motion.div);
  const MotionText = chakra(motion.h1);
  const { colorMode } = useColorMode();
  return (
    <>
      <MotionBox
        maxH="300vh"
        initial="hidden"
        animate="show"
        exit="exit"
        variants={pageAnimation}
      >
        <Container maxW="container.xl" mt="20">
          <Flex>
            <MotionText
              initial="hidden"
              animate="show"
              exit="exit"
              variants={fade}
              fontSize="7xl"
              fontWeight="semibold"
            >
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
            </MotionText>
            <CircularProgress
              isIndeterminate
              position="absolute"
              ml="50rem"
              mt="-2.5rem"
              zIndex="-1"
              value={30}
              size="550px"
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
          <Grid
            templateColumns="repeat(auto-fit, minmax(400px, 1fr))"
            gap={4}
            color="white"
          >
            <Center
              w={"100%"}
              h="240"
              bg={colorMode === "light" ? "blue.400" : "#006d77"}
              rounded="2xl"
            >
              <Text fontSize="4xl" fontWeight="extrabold">
                Steam
              </Text>
            </Center>

            <Center w="100%" h="240px" bgColor="#83c5be" rounded="2xl">
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
            <Center w="100%" h="240" bgColor="gray.300" rounded="2xl">
              <Text fontSize="4xl" fontWeight="extrabold">
                ...and More
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
        <Container
          roundedTop="md"
          mt="15rem"
          minH="10vh"
          maxW="100%"
          bg={colorMode === "light" ? "#23d997" : "#4ecdc4"}
          color="white"
        >
          <Center d="flex" justifyContent="space-around" alignItems="center">
            <Box fontSize="2xl">
              <Icon as={GrReactjs} w={10} h={10} />
              <Icon as={SiRedux} w={10} h={10} />
              <Text> Site developed by Abraham Belayneh.</Text>
              <Text> Created with React.js and Redux</Text>
            </Box>
            <Box my="3rem" mx="2rem">
              <Stack spacing={4}>
                <Heading fontSize="2xl">Links</Heading>
                <Text cursor="pointer" onClick={onToggle}>
                  Github
                </Text>
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
                <Text cursor="pointer">API</Text>
                <Text cursor="pointer">Discord</Text>
              </Stack>
            </Box>
          </Center>
        </Container>
      </MotionBox>
    </>
  );
};

export default Main;
