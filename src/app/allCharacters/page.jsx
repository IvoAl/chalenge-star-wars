import CardCharacter from "@/components/CardCharacter";
import axios from "axios";

const url = "https://swapi.dev/api/people";

const getAllCharacters = async (url, allCharacters = []) => {
  const response = await axios.get(url);
  const { results, next } = response.data;

  allCharacters.push(...results);

  if (next) {
    return getAllCharacters(next, allCharacters);
  } else {
    return allCharacters;
  }
};

export default async function AllCharacters() {
  const allCharacters = await getAllCharacters(url);
  return (
    <div>
      <h1>Todos los personajes</h1>
      <div className="">
        {allCharacters &&
          allCharacters.map((char) => {
            return <CardCharacter key={char.name} character={char} />;
          })}
      </div>
    </div>
  );
}
