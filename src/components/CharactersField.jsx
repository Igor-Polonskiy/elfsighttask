import React, { useState, useEffect } from "react";
import Character from "./Character";
import Filter from "./Filter";

export default function CharactersField() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [filtredCharacters, setFiltredCharacters] = useState([])

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(true);
        setCharacters(result.results);
        setFiltredCharacters(result.results)
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
            <div>Ошибка загрузки данных: {error}</div>
          ) : (
            filtredCharacters.map((item) => (
              <Character key={item.id} item={item}></Character>
            ))
          )
        ) : (
          <h3 >Загрузка...</h3>
        )}
      </div>
    </div>
  );
}
