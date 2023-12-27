import React, { lazy } from "react";

// import Profile from '.';
import RouteProps from "../routes";
const LandingPage = lazy(() => import("."));
const route: RouteProps = {
  path: "/landing-page",
  component: <LandingPage />,
};

export default route;
