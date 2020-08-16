import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Home } from "@/components/Home";
import { Rank } from "@/components/Rank";
import "@/styles/index.less";
import store from "@/store";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { routes } from "@/router";

export const App = () => {
  return (
    <Provider store={store}>
      <Router>{renderRoutes(routes)}</Router>
    </Provider>
  );
};
