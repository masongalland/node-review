import React from 'react';

export default function({name, make, model, year}){
    return (
        <div className="user-container">
            <h2>{name}</h2>
            <p><b>Year: </b>{year}</p>
            <p><b>Make: </b>{make}</p>
            <p><b>Model: </b>{model}</p>
        </div>
    )
}