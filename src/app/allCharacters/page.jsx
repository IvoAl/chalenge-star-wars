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
  const url = "https://swapi.dev/api/people";
  const allCharacters = await getAllCharacters(url);
  return (
    <div className=" font-mono flex flex-col items-center">
      <h1 className="text-3xl my-5">Todos los personajes</h1>
      <div className="flex flex-wrap w-3/4">
        {allCharacters &&
          allCharacters.map((char) => {
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
