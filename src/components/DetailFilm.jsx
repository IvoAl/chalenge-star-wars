import Image from "next/image";

export default function DetailFilm({ film, infoCharacters }) {
  return (
    <div className="bg-red-600">
      <h1>{film.title}</h1>
      <Image
        alt="Imagen generica"
        width={40}
        height={40}
        src={"/starwars.jpg"}
      />
      <h4>{film.episode_id}</h4>
      <h4>{film.director}</h4>
    </div>
  );
}
