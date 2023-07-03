import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import Style from "./card.module.css"

export default function Card({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className={Style.cardLayout}>
      <Image
        layout="responsive"
        src={BASE_URL + result.backdrop_path}
        width={200}
        height={100}
      />
      <div className="p-2">
        <p className="truncate text-lg">{result.overview}</p>
        <h2 className="text-lg font-bold">{result.title || result.name}</h2>
        <p className="flex items-center">
          {result.release_date || result.first_air_date}
          <ThumbUpIcon className={Style.cardThumbnail} />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
