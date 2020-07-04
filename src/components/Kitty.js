import React from 'react'; 

const Kitty = ( {id, name, mail}) =>{
    return(
        <div className="br2 pa2 ma2 bg-light-blue grow ba dib shadow-5 tc kittys" >
            <img src={`https://robohash.org/${id}?set=set4`} alt ="Foto de Kitty" />
            <h2>{name}</h2>
            <p>{mail}</p>
        </div>
    )
}
export default Kitty;