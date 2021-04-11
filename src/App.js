import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/Main_Home";
import GameHome from "./pages/Api_Home";
import Nav from "./main_components/nav";
import GlobalStyle from "./styles";
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/games" component={GameHome} />
      </Switch>
    </div>
  );
};

export default App;
