import styled from "styled-components";
import { motion } from "framer-motion";

// STYLED COMPONENT
export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: #fff;

  @media (max-width: 600px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const StyleDescription = styled.div`
  flex: 1;
  padding-right: 6rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }

  @media (max-width: 600px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 5rem;
    }
  }
`;

export const StyleImage = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

export const StyleHide = styled.div`
  overflow: hidden;
`;
