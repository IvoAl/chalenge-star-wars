import Image from "next/image";
import Link from "next/link";
export default function CardFilm({ title, episode_id }) {
  return (
    <div className="">
      <Link
        className="flex flex-col items-center justify-around h-72 w-64 m-8 rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-lg hover:shadow-fuchsia-950"
        href={`/detailFilm/${episode_id}`}
      >
        <h4 className="text-lg">{title}</h4>
        <Image
          className="w-3/4 h-3/5 rounded-xl"
          alt="Imagen generica"
          width={90}
          height={70}
          src={"/starwars.jpg"}
        />
        <p>Capitulo N°: {episode_id}</p>
      </Link>
    </div>
  );
}
