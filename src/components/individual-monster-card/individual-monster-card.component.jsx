import React from "react";

import { MonsterCardContainer } from "./individual-monster-card.styles";

const Card = (props) => (  // receive the props from cardList which gives access to 'monster' from the yellow word in the 'Card' component
    <MonsterCardContainer>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x200`}/> {/* add a=our id as id is a unique number */}
        <h2>{props.monster.name}</h2>  
        <h2>{props.monster.email}</h2> {/* name and email and website are from the api */}
        <h3>{props.monster.website}</h3>
    </MonsterCardContainer>
)

export default Card;