import React from 'react';


function Card1(props){
    return(
        <div>
            <h3>This is card one</h3>
        <h4>{props.name}</h4>
        <p>{props.name2}</p>
        </div>
    )
}
export default Card1