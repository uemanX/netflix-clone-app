import * as React from "react";
import Banner from "../Banner";
import Nav from "../Nav";
import "./homeScreen.css";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />
      {/* Row */}
    </div>
  );
};

export default HomeScreen;
