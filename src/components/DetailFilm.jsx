import Image from "next/image";

export default function DetailFilm({ film, infoCharacters }) {
  return (
    <div className="w-1/2 h-screen flex flex-col justify-center items-center ">
      <h1 className="text-2xl">{film.title}</h1>
      <Image
        className="my-10 w-3/4 h-3/5 rounded-xl"
        alt="Imagen generica"
        width={40}
        height={40}
        src={"/starwars.jpg"}
      />
      <div className="flex w-full justify-evenly">
        <h4 className="text-start text-lg ">Capitulo N°: {film.episode_id}</h4>
        <h4 className="text-start text-lg ">Director: {film.director}</h4>
      </div>
    </div>
  );
}
