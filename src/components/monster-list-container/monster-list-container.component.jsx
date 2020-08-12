import React from "react";

import IndividualMonster from "../individual-monster-card/individual-monster-card.component";

import { MonsterListContainerDiv } from "./monster-list-container.styles";

const CardList = (props) => (
    <MonsterListContainerDiv>
    {props.monsters.map(monster => (     
        <IndividualMonster key={monster.id} monster={monster}/> 
    ))}
    </MonsterListContainerDiv>   
);

export default CardList;