import CardFilm from "@/components/cardFilm";
import axios from "axios";

const getAllFilm = async () => {
  const response = await axios.get("https://swapi.dev/api/films");
  return response.data.results;
};
export default async function AllFilms() {
  const allFilms = await getAllFilm();
  return (
    <div className="flex flex-col	items-center justify-center h-screen font-mono">
      <h1 className="text-3xl">Todas las peliculas</h1>
      <div className="flex flex-wrap w-11/12 h-4/5 justify-center items-center">
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
    </div>
  );
}
