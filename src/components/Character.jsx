import React, { useState } from "react";

export default function Character(props) {
  const [character] = useState(props.item);
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
     setShowModal(prev => prev = !prev); 
  }
 

  return (
    <div className="character" onClick={handleClick}>
      <div className="prevCharacter">
        <div className="prevImage">
          <img src={character.image} alt="pic"></img>
        </div>
        <h1>{character.name}</h1>
      </div>
      {showModal ? (
        <div className="modal" >
          <div className="modalContent">
            <div className="charracterBody">
              <div className="image">
                <img src={character.image} alt="pic"></img>
              </div>
              <div className="characterProps">
              <div className="characterTitle">{character.name}</div>
                <div>Status: <span>{character.status}</span></div>
                <div>Species: <span>{character.species}</span></div>
                <div>Type : <span>{character.type }</span></div>
                <div>Gender: <span>{character.gender}</span></div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
