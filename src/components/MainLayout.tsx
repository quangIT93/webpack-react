import React from "react";
import Navbar from "./Navbar";
interface Props {
  children: React.ReactNode;
}
const MainPage = ({ children }: Props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div>{children}</div>;
    </React.Fragment>
  );
};

export default MainPage;
