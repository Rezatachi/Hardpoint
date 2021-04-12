import React from "react";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";

//Redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  //Data
  const { game, screen } = useSelector((state) => state.detail);
  return (
    <CardShadow>
      <Detail>
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
                  <img alt={data.platform.name} key={data.platform.id}></img>
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
      </Detail>
    </CardShadow>
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
`;

const Detail = styled(motion.div)`
  margin: 5rem 0rem;
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
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

const Gallery = styled(motion.div)`
  img {
    padding: 4rem 0rem;
  }
`;
export default GameDetail;
