import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

// ANIMATION
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function OurWorkDetails() {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState("");

  //useEffect
  useEffect(() => {
    const currentMovie = movies.filter((movie) => movie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <StyleDetail
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
         
        >
          <StyleHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </StyleHeadline>

          <StyleAwards>
            {movie.awards.map((awardDetail) => (
              <Award
                title={awardDetail.title}
                description={awardDetail.description}
              />
            ))}
          </StyleAwards>
          <StyleImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </StyleImageDisplay>
        </StyleDetail>
      )}
    </>
  );
}

const StyleDetail = styled(motion.div)`
  color: #fff;
`;

const StyleHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyleAwards = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5rem 10rem;
`;

const StyleAward = styled.div`
  padding: 4rem;
  position: relative;

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .line {
    width: 70%;
    height: 0.5rem;
    background-color: #23d997;
    position: absolute;
    top: 35%;
  }

  p {
    margin-top: 3rem;
  }
`;

const StyleImageDisplay = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
// COMPONENT AWARD
const Award = (props) => {
  const { title, description } = props;
  return (
    <StyleAward>
      <h3>{title}</h3>
      <div className="test">
        <div className="line"></div>
        <p>{description}</p>
      </div>
    </StyleAward>
  );
};
export default OurWorkDetails;
