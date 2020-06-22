import React from 'react';
import Card from './Card'

const CardList = ( {robots} ) =>{
    const robotCard = robots.map( (robot, i) =>{
        return  <Card id={robots[i].id} name={robots[i].name} mail={robots[i].email}/>; 
    });
    return(
    <div style={{marginTop: '3em'}}>
       {robotCard}
    </div>
    )
}
export default CardList; 