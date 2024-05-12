import Image from "next/image";
import Link from "next/link";

export default function CardCharacter({ character }) {
  return (
    <div className="bg-slate-200 shadow-black rounded-xl shadow-lg w-40 h-80 m-2.5 ">
      <Link
        className="flex flex-col items-center justify-around h-full"
        href={`/detailCharacter/${character.name}`}
      >
        <h1 className="my-px w-11/12 text-center">{character.name}</h1>
        <Image
          className="w-32 h-40 rounded-xl"
          alt="Imagen generica"
          width={40}
          height={40}
          src={"/starwars.jpg"}
        />
        {character.eye_color && (
          <div className="flex flex-col">
            <h1 className=" text-center">
              Ojos: {character.eye_color !== "unknown" && character.eye_color}
            </h1>
            <h1 className=" text-center">
              Genero: {character.gender !== "n/a" && character.gender}
            </h1>
          </div>
        )}
      </Link>
    </div>
  );
}
