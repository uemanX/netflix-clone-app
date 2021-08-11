import * as React from "react";
import { trancate } from "../../utils";
import "./Banner.css";
type Props = {};

const Banner = (props: Props) => {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {trancate(
            `This is a test description This is a test descriptionThis is a test
          descriptionThis is a test descriptionThis is a test descriptionThis is
          a test descriptionThis is a test description This is a test
          descriptionThis is a test descriptionThis is a test descriptionThis is
          a test descriptionThis is a test descriptionThis is a test description
          This is a test descriptionThis is a test descriptionThis is a test
          descriptionThis is a test description This is a test description This
          is a test description This is a test description This is a test
          description This is a test description This is a test description`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
