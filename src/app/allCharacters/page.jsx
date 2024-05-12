import AllCharacters from "@/components/AllCharacters";
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
export default async function PageAllCharacters() {
  const url = "https://swapi.dev/api/people";
  const allCharacters = await getAllCharacters(url);
  return <AllCharacters info={allCharacters} />;
}
