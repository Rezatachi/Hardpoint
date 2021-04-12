import React from "react";
//Styling
import styled from "styled-components";
import { motion } from "framer-motion";
import { Text } from "@chakra-ui/react";

//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
const Game = ({ name, image, released, id, screenshots }) => {
  //Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame onClick={loadDetailHandler}>
      <img src={image} alt={name} />
      <Text fontSize="3xl" fontFamily="mono" fontWeight="bold">
        {name}
      </Text>
      <Text fontSize="lg" fontFamily="mono" fontWeight="bold">
        {released}
      </Text>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 20vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`;
export default Game;
