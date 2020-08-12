import styled from "styled-components";

export const MonsterCardContainer = styled.div ` 
    display: flex;
    flex-direction: column;
    background-color: #95dada;
    border: 1px solid grey;
    border-radius: 5px;
    padding:55px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: 0.25s ease-out;

    &:hover {
        transform: scale(1.05);
    }

    @media screen and (max-width:1024px) {
       padding:100px;
    }

    @media screen and (max-width:450px) {
       padding:70px;
       display:inline-block;
    }
`;