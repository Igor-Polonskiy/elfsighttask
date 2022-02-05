import React, { useEffect, useState } from "react";

export default function Filter({ filterCharacters, characters }) {
  const [name, setName] = useState("");
  const [filtredCharacters, setFiltredCharacters] = useState(characters);
  const [alive, setAlive] = useState(false);
  const [dead, setDead] = useState(false);
  const [unknown, setUnknown] = useState(false);
  const [human, setHuman] = useState(false);
  const [alien, setAlien] = useState(false);
  const [withType, setWithType] = useState(false);
  const [withoutType, setWithoutType] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [unknownGender, setUnknownGender] = useState(false);

  function filterByName(e) {
    setName(e.target.value);
  }

  function filterStatus(e) {
    console.log(e.target.name);
    switch (e.target.name) {
      case "alive":
        setAlive((prev) => (prev = !prev));
        break;
      case "dead":
        setDead((prev) => (prev = !prev));
        break;
      case "unknown":
        setUnknown((prev) => (prev = !prev));
        break;
      case "Human":
        setHuman((prev) => (prev = !prev));
        break;
      case "Alien":
        setAlien((prev) => (prev = !prev));
        break;
      case "withType":
        setWithType((prev) => (prev = !prev));
        break;
      case "withoutType":
        setWithoutType((prev) => (prev = !prev));
        break;
      case "male":
        setMale((prev) => (prev = !prev));
        break;
      case "female":
        setFemale((prev) => (prev = !prev));
        break;
      case "unknownGender":
        setUnknownGender((prev) => (prev = !prev));
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    filterCharacters(filtredCharacters);
  }, [filterCharacters, filtredCharacters]);

  useEffect(() => {
    let filtred = characters;
    if (name) {
      filtred = filtred.filter(
        (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
      );
    }
    if (alive || dead || unknown) {
      let status = [];
      if (alive) {
        status = filtred.filter((item) => item.status === "Alive");
      }
      if (dead) {
        status = status.concat(
          filtred.filter((item) => item.status === "Dead")
        );
      }
      if (unknown) {
        status = status.concat(
          filtred.filter((item) => item.status === "unknown")
        );
      }
      filtred = status;
    }

    if (human || alien) {
      let status = [];
      if (human) {
        status = filtred.filter((item) => item.species === "Human");
      }
      if (alien) {
        status = status.concat(
          filtred.filter((item) => item.species === "Alien")
        );
      }
      filtred = status;
    }

    if (withType || withoutType) {
      let status = [];
      if (withType) {
        status = filtred.filter((item) => item.type !== "");
      }
      if (withoutType) {
        status = status.concat(filtred.filter((item) => item.type === ""));
      }
      filtred = status;
    }

    if (male || female || unknownGender) {
      let status = [];
      if (male) {
        status = filtred.filter((item) => item.gender === "Male");
      }
      if (female) {
        status = status.concat(
          filtred.filter((item) => item.gender === "Female")
        );
      }
      if (unknownGender) {
        status = status.concat(
          filtred.filter((item) => item.gender === "unknown")
        );
      }
      filtred = status;
    }

    setFiltredCharacters(filtred);
  }, [
    characters,
    name,
    dead,
    alive,
    unknown,
    human,
    alien,
    withoutType,
    withType,
    male,
    female,
    unknownGender,
  ]);

  return (
    <div className=" filterField">
      <h2>Фильтровать по:</h2>
      <div className="filter">
        <div className="filtertype">
          <div>
            Имени:{" "}
            <input type="text" value={name} onChange={filterByName}></input>
          </div>
        </div>
        <div className="filtertype">
          <div>Статусу: </div>
          <label>
            Alive{" "}
            <input
              type="checkbox"
              checked={alive}
              name="alive"
              onChange={filterStatus}
            ></input>
          </label>
          <label>
            Dead{" "}
            <input
              type="checkbox"
              checked={dead}
              name="dead"
              onChange={filterStatus}
            ></input>
          </label>
          <label>
            Unknown{" "}
            <input
              type="checkbox"
              checked={unknown}
              name="unknown"
              onChange={filterStatus}
            ></input>
          </label>
        </div>
        <div className="filtertype">
          <div>Разновидность: </div>
          <label>
            Human{" "}
            <input
              type="checkbox"
              checked={human}
              name="Human"
              onChange={filterStatus}
            ></input>
          </label>
          <label>
            Alien{" "}
            <input
              type="checkbox"
              checked={alien}
              name="Alien"
              onChange={filterStatus}
            ></input>
          </label>
        </div>
        <div className="filtertype">
          <div>Тип: </div>
          <label>
            Без типа{" "}
            <input
              type="checkbox"
              checked={withoutType}
              name="withoutType"
              onChange={filterStatus}
            ></input>
          </label>
          <label>
            С типом{" "}
            <input
              type="checkbox"
              checked={withType}
              name="withType"
              onChange={filterStatus}
            ></input>
          </label>
        </div>
        <div className="filtertype">
          <div>Гендер: </div>
          <label>
            Male{" "}
            <input
              type="checkbox"
              checked={male}
              name="male"
              onChange={filterStatus}
            ></input>
          </label>
          <label>
            Female{" "}
            <input
              type="checkbox"
              checked={female}
              name="female"
              onChange={filterStatus}
            ></input>
          </label>
          <label>
            Unknown{" "}
            <input
              type="checkbox"
              checked={unknownGender}
              name="unknownGender"
              onChange={filterStatus}
            ></input>
          </label>
        </div>
      </div>
    </div>
  );
}
