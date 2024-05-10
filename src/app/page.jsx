import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-800 h-screen flex justify-evenly items-center font-serif text-lg">
      <Link href={"/allFilms"}>
        <button className="bg-white h-14 rounded-lg p-4 hover:bg-black hover:text-white ">
          Peliculas
        </button>
      </Link>
      <Link href={"/allCharacters"}>
        <button className="bg-white h-14 rounded-lg p-4 hover:bg-black hover:text-white">
          Personajes
        </button>
      </Link>
    </div>
  );
}
