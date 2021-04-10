import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import {
  StyleDescription,
  StyledAbout,
  StyleImage,
  StyleHide,
} from "../styles";

function SectionAboutUs() {
  return (
    <StyledAbout>
      <StyleDescription>
        <div className="title">
          <StyleHide>
            <h2>We work to make</h2>
          </StyleHide>
          <StyleHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyleHide>
          <StyleHide>
            <h2>true</h2>
          </StyleHide>
        </div>
        <p>
          Contact us for any photography and video ideas that you have. We have
          professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </StyleDescription>

      <StyleImage>
        <img src={home1} alt="a man with camera" />
      </StyleImage>
    </StyledAbout>
  );
}


export default SectionAboutUs;
