import React from 'react'
import './StarWars.css';


const Character = props => {
    return (
        <div className = "characterCard">
        <div className = "card-header">
        <h3> Name: {props.Character.name} </h3>
        </div>
        <p>Birth Year: {props.Character.birth_year}</p>
        <p>Gender: {props.Character.gender}</p>
        <p>Eye Color: {props.Character.eye_color}</p>
        <p>Mass: {props.Character.mass}</p>
        <p>Height: {props.Character.height}</p>
        <p>Films: {props.Character.films.length}</p>
        </div>
    );
}

export default Character;