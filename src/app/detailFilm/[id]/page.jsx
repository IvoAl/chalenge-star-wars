import CardCharacter from "@/components/CardCharacter";
import DetailFilm from "@/components/DetailFilm";
import axios from "axios";

const getAllFilm = async () => {
  const response = await axios.get("https://swapi.dev/api/films");
  return response.data.results;
};
const getInfoCharacters = async (urls_characters) => {
  const responses = await Promise.all(
    urls_characters.map((url) => axios.get(url))
  );
  const characters = responses.map((response) => {
    const { name, url } = response.data;
    return { name, url };
  });
  return characters;
};
export default async function PageDetailFilm({ params }) {
  const { id } = params;
  const allFilms = await getAllFilm();
  const film = allFilms.find((film) => film.episode_id == id);
  const infoCharacters = await getInfoCharacters(film.characters);

  return (
    <div className="flex justify-center font-serif">
      <DetailFilm film={film} />
      <div className=" w-1/2 flex flex-col justify-center items-center h-screen ">
        <h1 className="my-10 text-lg">Personajes de la pelicula</h1>
        <div className="w-full flex flex-wrap overflow-y-auto">
          {infoCharacters.map((char) => {
            return <CardCharacter key={char} character={char} />;
          })}
        </div>
      </div>
    </div>
  );
}
