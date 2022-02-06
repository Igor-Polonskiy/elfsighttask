import React, { useState, useEffect } from "react";
import Character from "./Character";
import Filter from "./Filter";
import Preloader from "./Preloader";

export default function CharactersField() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [filtredCharacters, setFiltredCharacters] = useState([])

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setFiltredCharacters(result.results)
        setCharacters(result.results);
        
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  function filterCharacters(items){
    setFiltredCharacters(items)
  }

  return (
    <div className="characters">
      <Filter characters = {characters} filterCharacters = {filterCharacters}/>
      <div className="charactersField">
        {isLoaded ? (
          error ? (
            <div className="message">Ошибка загрузки данных: {error}</div>
          ) : filtredCharacters.length? (
            filtredCharacters.map((item) => (
              <Character key={item.id} item={item}></Character>
            ))
            
          ):  <div className="message">По указанным параметрам ничего не найдено</div>
        )  : (
          <Preloader/>
        )}
      </div>
    </div>
  );
}
