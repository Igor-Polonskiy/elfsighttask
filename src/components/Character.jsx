import React, { useState } from "react";

export default function Character(props) {
const [character, setCharacter] = useState(props.item)
console.log(character)
  return (
    <div>
      <h1>{character.name}</h1>
    </div>
  );
}
