import React from "react";
import styled from "styled-components";
import { fade } from "../animation";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import home2 from "../img/home2.png";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import { StyledAbout, StyleDescription, StyleImage } from "../styles";
import { UseScroll } from "./useScroll";

function SectionServices() {
  const [element, controls] = UseScroll(); 
  return (
    <StyleService
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyleDescription>
        <h2>
          High <span>Quality </span> Service
        </h2>
        <StyleCards>
          <StyleCard>
            <div className="icon">
              <img src={clock} alt="icon-clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={diaphragm} alt="icon-diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={money} alt="icon-money" />
              <h3>Affordable</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={teamwork} alt="icon-teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
        </StyleCards>
      </StyleDescription>
      <StyleImage>
        <img src={home2} alt="home2" />
      </StyleImage>
    </StyleService>
  );
}
// STYLE COMPONENT
const StyleService = styled(StyledAbout)`
  h2 {
    padding-bottom: 6rem;
  }
  p {
    width: 85%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyleCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyleCard = styled.div`
  flex-basis: 21rem;
  margin-right: 2rem;
  .icon {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    h3 {
      margin-left: 1.8rem;
      background-color: #fff;
      color: #000;
      padding: 1rem 2rem;
      font-size: 1.7rem;
    }
  }
`;
export default SectionServices;
