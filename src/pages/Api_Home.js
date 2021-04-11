import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import React, { useEffect } from "react";

const GameHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  //FETCH GAMES

  return <div>Game Area</div>;
};

export default GameHome;
