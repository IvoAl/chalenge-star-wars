import CardFilm from "@/components/cardFilm";
import axios from "axios";

const getAllFilm = async () => {
  const response = await axios.get("https://swapi.dev/api/films");
  return response.data.results;
};
export default async function AllFilms() {
  const allFilms = await getAllFilm();
  return (
    <div>
      <h1>Todas las peliculas</h1>
      {allFilms &&
        allFilms.map((elem) => {
          return (
            <CardFilm
              key={elem.episode_id}
              title={elem.title}
              episode_id={elem.episode_id}
            />
          );
        })}
    </div>
  );
}
