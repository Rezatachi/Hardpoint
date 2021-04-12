import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <NavContainer>
      <Text fontSize="3xl" fontWeight="bold">
        <Link to="/">Hardpoint</Link>{" "}
        <FontAwesomeIcon icon={faCrosshairs}></FontAwesomeIcon>
      </Text>
      <ul>
        <ColorModeSwitcher />
      </ul>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 3rem;
  }
  a {
    text-decoration: none;
  }
`;
export default Nav;
