import React from "react";
import { MovieProps, Result } from "@/utils/movieProps";
import Image from "next/image";
import Link from "next/link";

type Props = {
  movies: MovieProps;
};

const Popular: React.FC<Props> = ({ movies }) => {
  const { results } = movies;
  return (
    <div className="container">
      <h4 className="text-2xl mb-8">Popular Movies</h4>
      <div className="flex flex-wrap gap-4">
        {results.slice(0, 6).map((movie) => (
          <Link
            href={`/movie/${movie.id}`}
            className="w-[400px] flex-1"
            key={movie.id}
          >
            <Image
              className="object-cover"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={500}
              height={500}
            />
            {movie.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;
