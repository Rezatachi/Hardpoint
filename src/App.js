import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main_Home";
import GameHome from "./pages/Api_Home";
import Nav from "./main_components/nav";
import GlobalStyle from "./styles";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path={["/games/:id", "/games"]}>
            <GameHome />
          </Route>
        </Switch>{" "}
      </AnimatePresence>
    </>
  );
};

export default App;
