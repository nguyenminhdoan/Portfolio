import React from "react";
import styled from "styled-components";

// ANIMATION
import { motion } from "framer-motion";
import { pageAnimation, titleAnimate } from "../animation";
import ScrollTop from "../components/ScrollTop";
function Contact() {
  return (
    <StyleContact
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ backgroundColor: "#fff" }}
    >
      <StyleTitle>
        <StyleHide>
          <motion.h2 variants={titleAnimate}>Get In Touch</motion.h2>
        </StyleHide>
        <StyleHide>
          <StyleSocial variants={titleAnimate}>
            <StyleCircle></StyleCircle>
            <h2>Send Use A Message</h2>
          </StyleSocial>
        </StyleHide>

        <StyleHide>
          <StyleSocial variants={titleAnimate}>
            <StyleCircle></StyleCircle>
            <h2>Send Use A Message</h2>
          </StyleSocial>
        </StyleHide>

        <StyleHide>
          <StyleSocial variants={titleAnimate}>
            <StyleCircle></StyleCircle>
            <h2>Send Use A Message</h2>
          </StyleSocial>
        </StyleHide>
      </StyleTitle>
      <ScrollTop />
    </StyleContact>
  );
}

const StyleContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const StyleTitle = styled.div`
  margin-bottom: 4rem;
  color: #000000;
`;
const StyleHide = styled.div`
  overflow: hidden;
`;

const StyleCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;
const StyleSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default Contact;
