import React from "react";
import { HashRouter as Router } from "react-router-dom";
import "@/styles/index.less";
import Player from "@/components/Player";
import store from "@/store";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { routes } from "@/router";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>{renderRoutes(routes)}</Router>
      <Player />
    </Provider>
  );
};
