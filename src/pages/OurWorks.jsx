import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// IMPORT IMAGES
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

function OurWorks() {
  return (
    <StyleWork>
      <StyleMovie className="movie">
        <h2>The Athlete</h2>
        <div id="line"></div>
        <Link>
          <img src={athlete} alt="athlete" />
        </Link>
      </StyleMovie>

      <StyleMovie className="movie">
        <h2>The Racer</h2>
        <div id="line"></div>
        <Link>
          <img src={theracer} alt="The-racer" />
        </Link>
      </StyleMovie>

      <StyleMovie className="movie">
        <h2>The Goodtimes</h2>
        <div id="line"></div>
        <Link>
          <img src={goodtimes} alt="Good-times" />
        </Link>
      </StyleMovie>
    </StyleWork>
  );
}

// STYLE COMPONENTS
const StyleWork = styled.div`
  min-height: 100vh;
  /* background-color: #fff; */
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const StyleMovie = styled.div`
  padding-bottom: 11rem;
  #line {
    height: 0.7rem;
    background-color: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
export default OurWorks;
