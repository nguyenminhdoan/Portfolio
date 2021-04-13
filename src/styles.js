import styled from "styled-components";

// STYLED COMPONENT
export const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  color: #fff;
`;

export const StyleDescription = styled.div`
  flex: 1;
  padding-right: 6rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
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
