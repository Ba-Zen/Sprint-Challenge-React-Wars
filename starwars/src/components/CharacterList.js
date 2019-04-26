import React from 'react';
import Character from './Character';
import "./StarWars.css";

const CharacterList = props => {
    return (
        <div className = "characterList">
        
        <div className = "list">
        {props.CharacterList.map(Characters => (
            <Character Character={Characters} />
        ))}
        </div>
        </div>
    );
}

export default CharacterList;