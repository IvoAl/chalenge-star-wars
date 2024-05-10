import Image from "next/image";
import Link from "next/link";

export default function CardCharacter({ character }) {
  return (
    <div>
      <Link href={`/detailCharacter/${character.name}`}>
        <h1>{character.name}</h1>
        <Image
          alt="Imagen generica"
          width={40}
          height={40}
          src={"/starwars.jpg"}
        />
      </Link>
    </div>
  );
}
