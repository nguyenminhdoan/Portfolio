import React from "react";
import styled from "styled-components";
import { StyledAbout } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

import { UseScroll } from "./useScroll";
import { scrollReveal } from "../animation";

function SectionFAQ() {
  const [element, controls] = UseScroll();
  return (
    <StyleFAQ
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <AnimateSharedLayout>
        <h2>
          Any Questions <span>FAQ</span>
        </h2>
        <Toggle title="How Do We Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              animi!
            </p>
          </div>
        </Toggle>

        <Toggle title="How Much Does It Costs">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              animi!
            </p>
          </div>
        </Toggle>

        <Toggle title="What Products Do You Offer">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              animi!
            </p>
          </div>
        </Toggle>

        <Toggle title="Different Payment Method">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              animi!
            </p>
          </div>
        </Toggle>

        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              animi!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyleFAQ>
  );
}

// STYLE COMPONENT
const StyleFAQ = styled(StyledAbout)`
  display: block;
  cursor: pointer;
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
