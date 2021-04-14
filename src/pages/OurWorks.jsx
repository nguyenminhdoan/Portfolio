import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// IMPORT IMAGES
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// ANIMATION
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimate,
  lineAnimate,
  slider,
  containerSlider,
} from "../animation";

import { UseScroll } from "../components/useScroll";

function OurWorks() {
  const [element, controls] = UseScroll();
  const [element2, controls2] = UseScroll();

  return (
    <StyleWork
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ backgroundColor: "#fff" }}
    >
      <motion.div variants={containerSlider}>
        <StyleFrame1 variants={slider}></StyleFrame1>
        <StyleFrame2 variants={slider}></StyleFrame2>
        <StyleFrame3 variants={slider}></StyleFrame3>
        <StyleFrame4 variants={slider}></StyleFrame4>
      </motion.div>

      <StyleMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimate} id="line"></motion.div>
        <Link to="work/the-athlete">
          <StyleHide>
            <motion.img variants={photoAnimate} src={athlete} alt="athlete" />
          </StyleHide>
        </Link>
      </StyleMovie>

      <StyleMovie
        variants={fade}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnimate} id="line"></motion.div>
        <Link to="work/the-racer">
          <img src={theracer} alt="The-racer" />
        </Link>
      </StyleMovie>

      <StyleMovie
        variants={fade}
        ref={element2}
        animate={controls2}
        initial="hidden"
      >
        <h2>The Goodtimes</h2>
        <motion.div variants={lineAnimate} id="line"></motion.div>
        <Link to="work/good-times">
          <img src={goodtimes} alt="Good-times" />
        </Link>
      </StyleMovie>
    </StyleWork>
  );
}

// STYLE COMPONENTS
const StyleWork = styled(motion.div)`
  min-height: 100vh;
  /* background-color: #fff; */
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const StyleMovie = styled(motion.div)`
  padding-bottom: 11rem;
  #line {
    height: 0.7rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const StyleHide = styled.div`
  overflow: hidden;
`;

const StyleFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background-color: #fffebf;
  z-index: 2;
`;

const StyleFrame2 = styled(StyleFrame1)`
  background-color: #ff8efb;
`;

const StyleFrame3 = styled(StyleFrame1)`
  background-color: #8ed2ff;
`;

const StyleFrame4 = styled(StyleFrame1)`
  background-color: #8effa0;
`;
export default OurWorks;
