import React from "react";
import { useHistory } from "react-router-dom";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { Text, Box, useColorMode } from "@chakra-ui/react";

//Images
import { apple } from "../img/apple.svg";

//Redux
import { useSelector } from "react-redux";

//Components
import { smallImage } from "../util";
const GameDetail = () => {
  //Exit Detail Handler
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("modal")) {
      document.body.style.overflow = "auto";
      history.push("/games");
      //Similar to a link tag but in JS
    }
  };
  //Data
  const { colorMode } = useColorMode();
  const { game, screen, isLoading } = useSelector((state) => state.detail);
  // 1. Create a custom motion component from Box
  const MotionBox = motion(Box);
  return (
    <>
      {!isLoading && (
        <CardShadow className="modal" onClick={exitDetailHandler}>
          {/* // 2. You'll get access to `motion` and `chakra` props in `MotionBox` */}
          <MotionBox
            margin="5rem 0rem"
            width="80%"
            borderRadius="1rem"
            padding="2rem 5rem"
            position="absolute"
            left="10%"
            bg={colorMode === "light" ? "#fff" : "#1A202C"}
            textColor={colorMode === "light" ? "#000" : "#fff"}
          >
            <Stats>
              <div className="rating">
                <Text fontSize="5xl" fontWeight="bold">
                  {game.name}
                </Text>
                <Text fontSize="3xl" fontWeight="normal" fontFamily="mono">
                  Rating: {game.rating}
                </Text>
              </div>
              <Info>
                <Text fontSize="2xl">Platforms:</Text>
                <Platforms>
                  {game.platforms &&
                    game.platforms.map((data) => (
                      <img
                        alt={data.platform.name}
                        key={data.platform.id}
                      ></img>
                    ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={game.background_image} alt="images" />
            </Media>
            <Description>
              <Text fontFamily="monospace" fontSize="2xl">
                {game.description_raw}
              </Text>
            </Description>
            <Gallery>
              {screen.results &&
                screen.results.map((image) => (
                  <img key={image.id} src={image} alt="screen" />
                ))}
            </Gallery>
          </MotionBox>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;

    object-fit: cover;
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

const Gallery = styled(motion.div)``;
export default GameDetail;
