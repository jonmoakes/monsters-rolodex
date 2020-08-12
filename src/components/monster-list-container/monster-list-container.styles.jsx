import styled from "styled-components";

export const MonsterListContainerDiv = styled.div ` 
    text-align:center;
    width:100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-gap: 20px;

    @media screen and (max-width:1024px) {
        grid-template-columns: 1fr;
        width:50%; 
    }

    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
        width:70%;  
    }

    @media screen and (max-width:450px) {
        grid-template-columns: 1fr;
        width:100%;  
    }
`;