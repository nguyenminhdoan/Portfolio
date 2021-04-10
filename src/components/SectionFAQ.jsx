import React from "react";
import styled from "styled-components";
import { StyledAbout } from "../styles";
function SectionFAQ() {
  return (
    <StyleFAQ>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <div className="question">
        <h4>How Do We Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            animi!
          </p>
        </div>
        <div className="faq-line "></div>
      </div>

      <div className="question">
        <h4>How Much Does It Costs</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            animi!
          </p>
        </div>
        <div className="faq-line "></div>
      </div>

      <div className="question">
        <h4>What Products Do You Offer</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            animi!
          </p>
        </div>
        <div className="faq-line "></div>
      </div>

      <div className="question">
        <h4>Different Payment Method</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            animi!
          </p>
        </div>
        <div className="faq-line "></div>
      </div>

      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            animi!
          </p>
        </div>
        <div className="faq-line "></div>
      </div>
    </StyleFAQ>
  );
}

// STYLE COMPONENT
const StyleFAQ = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2.5rem;
    font-weight: lighter;
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.4rem;
    margin: 2.3rem 0rem;
    width: 100%;
  }
  P {
    padding: 1.5rem 0rem;
  }
`;
export default SectionFAQ;
