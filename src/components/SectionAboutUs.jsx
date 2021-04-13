import React from "react";
import home1 from "../img/home1.png";
import {
  StyleDescription,
  StyledAbout,
  StyleImage,
  StyleHide,
} from "../styles";

import { motion } from "framer-motion";

import { titleAnimate, fade, photoAnimate } from "../animation";
import Wave from "./Wave";

function SectionAboutUs() {
  return (
    <StyledAbout>
      <StyleDescription>
        <motion.div className="title">
          <StyleHide>
            <motion.h2 variants={titleAnimate}>We work to make</motion.h2>
          </StyleHide>

          <StyleHide>
            <motion.h2 variants={titleAnimate}>
              your <span>dreams</span> come
            </motion.h2>
          </StyleHide>

          <StyleHide>
            <motion.h2 variants={titleAnimate}>true</motion.h2>
          </StyleHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography and video ideas that you have. We have
          professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyleDescription>

      <StyleImage>
        <motion.img
          variants={photoAnimate}
          src={home1}
          alt="a man with camera"
        />
      </StyleImage>
      <Wave />
    </StyledAbout>
  );
}

export default SectionAboutUs;
