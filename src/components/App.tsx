import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Home } from "@/components/Home";
import { Rank } from "@/components/Rank";
import "@/styles/index.less";
import Music from "@/components/Music";
import Singer from "@/components/Singer";
import { Login } from "@/components/Login";
import SongListDetail from "@/components/SongListDetail";
import SingerSongDetail from "@/components/SingerSongDetail";
import { Account } from "@/components/Account";
import { Mine } from "@/components/Mine";
import Recommend from "@/components/Recommend";
import { Search } from "@/components/Search";
import MusicPlay from "@/components/MusicPlay";
import store from "@/store";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/rank" component={Rank} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/singer" component={Singer} />
        <Route exact path="/songlist/:id" component={SongListDetail} />
        <Route exact path="/singersonglist/:id" component={SingerSongDetail} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/mine" component={Mine} />
        <Route exact path="/recommend" component={Recommend} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/play/:id" component={MusicPlay} />
      </Router>
    </Provider>
  );
};
