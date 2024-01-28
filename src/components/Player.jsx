import React, { useState } from 'react'

const Player = ({name, symbol, isActive, onChangeName}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [player, setPlayer] = useState(name);


    function handleEditClick(){
        setIsEditing((currEditState) => !currEditState);
        
        if(isEditing){
        onChangeName(symbol, player);
        }
    }

    function handleOnChange(e){
        setPlayer(e.target.value);
    }

    let playerName = <span className="player-name">{player}</span>;

    if(isEditing){
        playerName = <input type='text' required value={player} onChange={handleOnChange}/>
    }

  return (
    <li className={isActive ? 'active' : undefined}>
    <span className="player">
        {playerName}
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>
  )
}

export default Player