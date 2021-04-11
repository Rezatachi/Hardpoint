import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@chakra-ui/react";
const Nav = () => {
  return (
    <NavContainer>
      <Text fontSize="3xl" fontWeight="bold">
        Hardpoint <FontAwesomeIcon icon={faCrosshairs}></FontAwesomeIcon>
      </Text>
      <ul>
        <li>
          <Link to="/">
            <a href="/">
              <Text fontSize="2xl">Home</Text>
            </a>
          </Link>
        </li>
        <li>
          <Link to="/games">
            <a href="/">
              <Text fontSize="2xl">Games</Text>
            </a>
          </Link>
        </li>
        <li>
          <a href="https://github.com/Rezatachi">
            <Text fontSize="2xl">
              <FontAwesomeIcon icon={faCode} size="1x"></FontAwesomeIcon>
            </Text>
          </a>
        </li>
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
