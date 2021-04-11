import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <WaveSvg
      width="2000"
      height="2000"
      viewBox="0 0 1577 1069"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 7 }}
        d="M0.5 0.5L1576 1068.5"
        stroke="#23d997"
        strokeOpacity="0.4"
        strokeWidth="2"
      />
    </WaveSvg>
  );
};
const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: -1;
`;

export default Wave;
