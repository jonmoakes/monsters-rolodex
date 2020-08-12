import React from "react";

import IndividualMonster from "../individual-monster-card/individual-monster-card.component";

import { MonsterListContainerDiv } from "./monster-list-container.styles";

const CardList = (props) => (
    <MonsterListContainerDiv>
    {props.monsters.map(monster => (     // getting the props from app.js called monsters ( the yellow ) and then mapping over each. returns an individual monster.
        <IndividualMonster key={monster.id} monster={monster}/>  // imported the Card and pass it a key and give it a prop called monster which takes each individual monster. Key needed so react knows which monster to update if one changes
    ))}
    </MonsterListContainerDiv>   
);

export default CardList;