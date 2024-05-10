import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-gray-800 h-screen flex justify-evenly items-center font-serif text-lg">
        <button className="bg-white h-14 rounded-lg p-4 hover:bg-black hover:text-white ">
          Peliculas
        </button>
        <button className="bg-white h-14 rounded-lg p-4 hover:bg-black hover:text-white">
          Personajes
        </button>
      </div>
    </main>
  );
}
