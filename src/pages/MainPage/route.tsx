import React, { lazy } from "react";

// import Profile from '.';
import RouteProps from "../routes";
const MainPage = lazy(() => import("."));
const route: RouteProps = {
  path: "/",
  component: <MainPage />,
};

export default route;
