import React from 'react';
import './card.css';

const Card = props => {
    const {index, thumbnail, name, description, group, link} = props.property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={thumbnail} alt="image"/>
            <div className="details">                
                <h4>{name}</h4>
                <p className="location">
                    {description}
                </p>
                <ul className="features">
                    <li>{group}</li>                    
                </ul>
            </div>
        </div>
    );
};

export default Card;