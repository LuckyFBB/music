import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Home } from "./Home";
import { Rank } from "./Rank";
import "../styles/index.less";
import { Music } from "./Music";
import { Singer } from "./Singer";
import { Login } from "./Login";
import { SongListDetail } from "./SongListDetail";

export const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/rank" component={Rank} />
      <Route exact path="/music" component={Music} />
      <Route exact path="/singer" component={Singer} />
      <Route exact path="/songlist/:id" component={SongListDetail} />
    </Router>
  );
};
