import React, { lazy } from "react";

// import Profile from '.';
import RouteProps from "../routes";
const LandingPage = lazy(() => import("."));
import MainLayout from "../../components/MainLayout";
const route: RouteProps = {
  path: "/",
  component: (
    <MainLayout>
      <LandingPage />
    </MainLayout>
  ),
};

export default route;
