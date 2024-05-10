import DetailCharacter from "@/components/DetailCharacter";
import axios from "axios";

const url = "https://swapi.dev/api/people";

const getCharacter = async (name, url) => {
  const response = await axios.get(url);
  const { results, next } = response.data;
  const character = results.find(
    (char) => char.name == decodeURIComponent(name)
  );
  if (character) {
    return character;
  } else {
    return getCharacter(name, next);
  }
};

export default async function PageDetailCharacter({ params }) {
  const { name } = params;
  const character = await getCharacter(name, url);

  return <DetailCharacter character={character} />;
}
