import React from "react";

import { MonsterCardContainer } from "./individual-monster-card.styles";

const Card = (props) => ( 
    <MonsterCardContainer>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x200`}/> 
        <h2>{props.monster.name}</h2>  
        <h2>{props.monster.email}</h2> 
        <h3>{props.monster.website}</h3>
    </MonsterCardContainer>
)

export default Card;