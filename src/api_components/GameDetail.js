import React from "react";
import { useHistory } from "react-router-dom";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { Text, Box, useColorMode } from "@chakra-ui/react";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
//Redux
import { useSelector } from "react-redux";

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

  //Star creator
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        //If it is smaller than a number, it will keep adding until it is bigger
        stars.push(<img alt="star" key={i} src={starFull}></img>);
        //Get the rating and loop over it and find the number and it corresponds with how many stars will be creates
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };
  //Case secction for multiple iamge for playforms
  const getPlatforms = (platform) => {
    switch (platform) {
      case "Playstation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
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
                {getStars()}
              </div>
              <Info>
                <Text fontSize="2xl" fontWeight="semibold">
                  Platforms:
                </Text>
                <Platforms>
                  {game.platforms &&
                    game.platforms.map((data) => (
                      <img
                        src={getPlatforms(data.platform.name)}
                        alt={data.platform.name}
                        key={data.platform.id}
                        title={data.platform.name}
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
                  <img key={image.id} src={image.image} alt="screen" />
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
  img {
    width: 1.5rem;
    height: 1.5rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
    width: 3rem;
    height: 3rem;
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
