import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { Text, Flex } from "@chakra-ui/react";
import { pageAnimation } from "../animation";
//Components
import Game from "../api_components/Game";
import GameDetail from "../api_components/GameDetail";
import { BounceLoader } from "react-spinners";

const GameHome = () => {
  //FETCH GAMES
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //Extract GAMES
  const { popular, newGames, upcoming, isLoading } = useSelector(
    (state) => state.games
  );

  return (
    <>
      {isLoading ? (
        <BounceLoader loading="true" />
      ) : (
        <GameList initial="hidden" animate="show" variants={pageAnimation}>
          {pathId && <GameDetail />}
          {/* When pathID is availible, go render it. If its not, dont render it */}
          <Flex>
            <Text
              fontSize="4xl"
              py="3rem"
              fontWeight="extrabold"
              cursor="pointer"
            >
              <Link to="upcoming" spy={true} smooth={true}>
                Upcoming Games
              </Link>
            </Text>
            <Text
              fontSize="4xl"
              py="3rem"
              fontWeight="extrabold"
              pl="4rem"
              cursor="pointer"
            >
              <Link to="popular" spy={true} smooth={true}>
                Popular Games
              </Link>
            </Text>
            <Text
              fontSize="4xl"
              py="3rem"
              fontWeight="extrabold"
              pl="4rem"
              cursor="pointer"
            >
              <Link to="newGames" spy={true} smooth={true}>
                New Games
              </Link>
            </Text>
          </Flex>
          <Games id="upcoming">
            {upcoming &&
              upcoming.map((game) => (
                <Game
                  initial="hidden"
                  animate="show"
                  variants={pageAnimation}
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
                  initial="hidden"
                  animate="show"
                  variants={pageAnimation}
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
                  initial="hidden"
                  animate="show"
                  variants={pageAnimation}
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
      )}
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
