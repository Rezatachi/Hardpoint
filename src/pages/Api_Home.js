import { useDispatch, useSelector } from "react-redux";
import { loadGames, fetchSearch } from "../actions/gamesAction";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Text,
  Flex,
  Input,
  useColorMode,
  Button,
  FormControl,
  Container,
} from "@chakra-ui/react";

//Components
import Game from "../api_components/Game";
import GameDetail from "../api_components/GameDetail";

const GameHome = () => {
  //DarkMode
  const { colorMode } = useColorMode();
  //FETCH GAMES
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const [textInput, settextInput] = useState("");
  const inputHander = (e) => {
    settextInput(e.target.value);
  };
  const sumbitHander = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    settextInput("");
  };
  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARACHED" });
  };
  //Extract GAMES
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <>
      <GameList>
        {pathId && <GameDetail />}
        {/* When pathID is availible, go render it. If its not, dont render it */}
        <Flex alignItems="center">
          <Text
            fontSize="3xl"
            py="2rem"
            fontWeight="extrabold"
            cursor="pointer"
            onClick={clearSearched}
          >
            <Link to="upcoming" spy={true} smooth={true}>
              Upcoming Games
            </Link>
          </Text>
          <Text
            fontSize="3xl"
            py="3rem"
            fontWeight="extrabold"
            pl="2rem"
            cursor="pointer"
          >
            <Link to="popular" spy={true} smooth={true}>
              Popular Games
            </Link>
          </Text>
          <Text
            fontSize="3xl"
            py="3rem"
            fontWeight="extrabold"
            pl="2rem"
            cursor="pointer"
          >
            <Link to="newGames" spy={true} smooth={true}>
              New Games
            </Link>
          </Text>
          <FormControl
            onSubmit={sumbitHander}
            ml="20rem"
            maxW="lg"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Input
              borderColor={colorMode === "light" ? "teal.400" : "#23d997"}
              focusBorderColor={colorMode === "light" ? "teal.400" : "#23d997"}
              placeholder="search for games!"
              size="md"
              w="20rem"
              onChange={inputHander}
              onSubmit={sumbitHander}
              type="text"
            />
            <Button
              type="submit"
              onClick={sumbitHander}
              bg={colorMode === "light" ? "teal.200" : "#23d997"}
              ml={2}
            >
              Search
            </Button>
          </FormControl>
        </Flex>

        {searched.length ? (
          <>
            <Text fontSize="4xl" py="3rem" fontWeight="extrabold">
              Searched Results
            </Text>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  key={game.id}
                  image={game.background_image}
                  screenshots={game.short_screenshots}
                />
              ))}
            </Games>
          </>
        ) : (
          ""
        )}
        <Text fontSize="4xl" py="3rem" fontWeight="extrabold">
          Upcoming Games
        </Text>
        <Games id="upcoming">
          {upcoming &&
            upcoming.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                key={game.id}
                image={game.background_image}
                screenshots={game.short_screenshots}
              />
            ))}
        </Games>
        <Text fontSize="4xl" py="3rem" fontWeight="extrabold">
          Popular Games
        </Text>
        <Games id="popular">
          {popular &&
            popular.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                key={game.id}
                image={game.background_image}
                screenshots={game.short_screenshots}
              />
            ))}
        </Games>
        <Text fontSize="4xl" py="3rem" fontWeight="extrabold">
          New Games
        </Text>
        <Games id="newGames">
          {newGames &&
            newGames.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                key={game.id}
                image={game.background_image}
                screenshots={game.short_screenshots}
              />
            ))}
        </Games>
        {/* If Upcoming games are availible, the component WILL be mapped */}
      </GameList>
      <Container
        mt="15rem"
        minH="20vh"
        maxW="100%"
        textColor={colorMode === "light" ? "black" : "#fff"}
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="2xl" fontWeight="semibold" textAlign="center">
          Made with ❤ by Abraham Belayneh
        </Text>
      </Container>
    </>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
export default GameHome;
