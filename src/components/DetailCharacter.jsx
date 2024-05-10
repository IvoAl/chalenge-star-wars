import Image from "next/image";

export default function DetailCharacter({ character }) {
  console.log("detail character:", character);
  return (
    <div>
      <h1>Detail Character</h1>
      <h1>Nombre: {character.name}</h1>
      <Image
        alt="Imagen generica"
        width={40}
        height={40}
        src={"/starwars.jpg"}
      />
      <h1>Color de ojos: {character.eye_color}</h1>
      <h1>Año de cumpleaños: {character.birth_year}</h1>
      <h1>Color de cabello: {character.hair_color}</h1>
      <h1>Altura: {character.height}</h1>
      <h1>Color de piel: {character.skin_color}</h1>
      <h1>Masa: {character.mass}</h1>
    </div>
  );
}
