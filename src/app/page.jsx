import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-custom-background h-screen flex justify-evenly items-center font-serif text-lg">
      <Link className="w-1/6" href={"/allFilms"}>
        <button
          className="bg-white h-14 rounded-lg p-4 
        hover:bg-black hover:text-white
        hover:shadow-lg hover:shadow-fuchsia-950 w-full"
        >
          Peliculas
        </button>
      </Link>
      <Link className="w-1/6" href={"/allCharacters"}>
        <button className="bg-white h-14 rounded-lg p-4 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-blue-500/50 w-full">
          Personajes
        </button>
      </Link>
    </div>
  );
}
