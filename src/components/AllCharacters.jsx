"use client";

import { useEffect, useState } from "react";
import CardCharacter from "./CardCharacter";
import Select from "react-select";

export default function AllCharacters({ info }) {
  const [allCharacters, setAllCharacters] = useState();
  const [allColorsEyes, setAllColorsEyes] = useState();
  const [allGenders, setAllGenders] = useState();
  const [filterCharacter, setFilterCharacter] = useState();

  useEffect(() => {
    setAllCharacters(info);
    setFilterCharacter(info);
    const allColors = [...new Set(info.map((char) => char.eye_color))];
    const optionsColorsEyes = allColors.map((color, index) => {
      return {
        value: color,
        label: color,
        id: "eye_color",
      };
    });
    setAllColorsEyes(optionsColorsEyes);
    const allGenders = [...new Set(info.map((char) => char.gender))];
    const optionsGenders = allGenders.map((gender) => {
      return {
        value: gender,
        label: gender,
        id: "gender",
      };
    });
    setAllGenders(optionsGenders);
  }, []);

  const handleFilter = (e) => {
    const { label, value, id } = e;
    setFilterCharacter(allCharacters.filter((char) => char[id] === value));
  };
  return (
    <div className=" font-mono flex flex-col items-center">
      <h1 className="text-3xl my-5">Todos los personajes</h1>
      <div className="flex justify-around w-4/5 my-8">
        <Select
          className="w-2/5"
          onChange={(e) => handleFilter(e)}
          options={allColorsEyes}
        />
        <Select
          className="w-2/5"
          onChange={(e) => handleFilter(e)}
          options={allGenders}
        />
      </div>
      <div className="flex flex-wrap w-3/4">
        {filterCharacter &&
          filterCharacter.map((char) => {
            return (
              <div className="m-5">
                <CardCharacter key={char.name} character={char} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
