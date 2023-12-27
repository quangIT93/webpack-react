import React from "react";
import { routes } from "./pages/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteProps from "./pages/routes";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, component }: RouteProps) => {
            return <Route path={path} element={component} key={path} />;
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}
