import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  return (
    <StyleNav>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <StyleLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "65%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Works</Link>
          <StyleLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "65%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <StyleLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "65%" : "0%" }}
          />
        </li>
      </ul>
    </StyleNav>
  );
}

const StyleNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 100000;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.8rem;
  }

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding: 0rem 3rem;
    position: relative;
  }

  #logo {
    font-size: 2.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 4rem 0rem;

    #logo {
      display: inline-block;
      margin-bottom: 3rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
  }
`;

const StyleLine = styled(motion.div)`
  height: 0.4rem;
  background-color: #23d997;
  width: 0%;
  position: absolute;
  bottom: -20%;
  left: 20%;
`;

export default Nav;
