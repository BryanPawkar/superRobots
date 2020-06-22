import React from 'react';

const Card = ( {name, mail, id} ) =>{
    return( 
        <div className="br2 pa2 ma2 bg-light-pink grow ba dib shadow-5 tc ">
            <img  src={`https://robohash.org/${id}`} alt="Foto de Perfil" />
            <h2>{name}</h2>
            <p>{mail}</p>
        </div>
    )
}
export default Card; 