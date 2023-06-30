import React from "react";
import { MovieProps, Result } from "@/utils/movieProps";
import MovieCard from "@/components/common/MovieCard";

type Props = {
  movies: MovieProps;
};

const Popular: React.FC<Props> = ({ movies }) => {
  const { results } = movies;
  return (
    <div className="container mb-32">
      <h4 className="mb-8 text-2xl">Popular Movies</h4>
      <div className="flex flex-wrap gap-8">
        {results.slice(0, 6).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
