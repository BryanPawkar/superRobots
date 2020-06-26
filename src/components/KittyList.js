import React from 'react';
import Kitty from './Kitty';

const KittyList = ( {kittys} ) =>{
    const kittyCard = kittys.map( (kitty, i) =>{
        return <Kitty 
        key = { kittys[i].id}
        id = { kittys[i].id}
        name = {kittys[i].name}
        mail = {kittys[i].email}/>
    });
    return(
        <div style={{paddingTop: '3em' , background: 'linear-gradient( to left, rgb(40, 177, 184), #ffa3d7)'}}>
            {kittyCard}
        </div>
    )
}
export default KittyList; 