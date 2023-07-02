import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MovieResult } from "@/utils/movieProps";
type Props = {
  movie: MovieResult;
};

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="pry-transition group relative max-w-[400px] flex-1 rounded-lg hover:scale-105"
    >
      <Image
        className="rounded-t-lg object-cover"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={500}
      />
      <div className="pry-transition invisible flex flex-col h-20 w-full rounded-b-lg bg-gradient-to-b from-transparent to-black py-3 px-2 group-hover:visible">
        <h5 className="text-sm drop-shadow-2xl mb-auto">{movie.title}</h5>
        <div className="flex w-full justify-between">
          <span className="text-xs opacity-60">{movie.vote_average}</span>
          <span className="text-xs opacity-60">{movie.release_date}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
