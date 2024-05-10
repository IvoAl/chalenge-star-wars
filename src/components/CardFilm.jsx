import Image from "next/image";
import Link from "next/link";

export default function CardFilm({ title, episode_id }) {
  return (
    <Link href={`/detailFilm/${episode_id}`}>
      <div>
        <h4>{title}</h4>
        <Image
          alt="Imagen generica"
          width={40}
          height={40}
          src={"/starwars.jpg"}
        />
        <p>{episode_id}</p>
      </div>
    </Link>
  );
}
