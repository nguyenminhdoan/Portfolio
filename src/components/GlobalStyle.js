import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        background-color: #1b1b1b;
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;

    }

    html {
        @media (max-width: 1000px) {
            font-size: 30%;
        }
       
        
    }

    button {
        font-weight: bold;
        font-size: 1.7rem;
        cursor: pointer;
        padding : 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: #fff;
        transition: all 0.2s ease-out;
        &:hover {
            background-color: #23d997;
            color: #fff;
        }

    }

    h2 {
        font-weight: lighter;
        font-size: 4rem;

    }
    h3{
        color: #fff;
    }
    h4{
        font-weight: lighter;
        font-size: 2.5rem; 
    }
    span{
        font-weight: bold;
        color: #23d997;
        font-size: 5rem;

    }
    p{
        padding: 4rem 0rem;
        font-size: 1.5rem;
    }
    a{
        font-size: 1.8rem;
    }
`;

export default GlobalStyle;
