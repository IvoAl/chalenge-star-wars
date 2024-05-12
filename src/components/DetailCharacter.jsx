import Image from "next/image";

export default function DetailCharacter({ character }) {
  return (
    <div className="font-mono flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-around h-3/5 w-9/12">
        <div className="flex flex-col items-center justify-center h-full w-1/2">
          <h1 className="text-2xl	mb-8">{character.name}</h1>
          <Image
            className="w-1/2	h-4/6	rounded-xl	"
            alt="Imagen generica"
            width={40}
            height={40}
            src={"/starwars.jpg"}
          />
        </div>
        <div className="h-1/2 w-2/5 flex flex-col justify-around text-lg">
          <h1>
            Color de ojos:{" "}
            {character.eye_color !== "unknown" &&
              character.eye_color !== "n/a" &&
              character.eye_color}
          </h1>
          <h1>
            Año de cumpleaños:{" "}
            {character.birth_year !== "unknown" &&
              character.birth_year !== "n/a" &&
              character.birth_year}
          </h1>
          <h1>
            Color de cabello:{" "}
            {character.hair_color !== "unknown" &&
              character.hair_color !== "n/a" &&
              character.hair_color}
          </h1>
          <h1>
            Altura:{" "}
            {character.height !== "unknown" &&
              character.height !== "n/a" &&
              character.height}
          </h1>
          <h1>
            Color de piel:{" "}
            {character.skin_color !== "unknown" &&
              character.skin_color !== "n/a" &&
              character.skin_color}
          </h1>
          <h1>
            Masa:{" "}
            {character.mass !== "unknown" &&
              character.mass !== "n/a" &&
              character.mass}
          </h1>
        </div>
      </div>
    </div>
  );
}
