import React from 'react';

class Card extends React.Component{
    
    render()
    {
    return(
    <div className="card">
        <img src="https://robohash.org/6" alt="robot"/>
        <h1>Name</h1>
        <h2>Birth Year</h2>
        <h2>Gender</h2>
        <h2>HomePlanet</h2>
    </div>
    )
}
}

export default Card;