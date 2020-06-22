import React from 'react';

const Search = ({searchChange}) =>{
    return(
        <div style={{boxShadow: '0px 15px 15px 0px #0000007d', borderBottom: '1px solid #0000007d'}}>
            <input 
            type="search" 
            placeholder="find a friend"
            onChange= {searchChange}
             />
        </div>
    );
}
export default Search; 
