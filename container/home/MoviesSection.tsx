import React from "react";
import { MovieResult } from "@/utils/movieProps";
import MovieCard from "@/components/common/MovieCard";

type Props = {
  title: string | null;
  movies: MovieResult[];
};

const MoviesSection: React.FC<Props> = ({ title, movies }) => {
  return (
    <div className="container mb-16">
      <h4 className="mb-8 text-2xl">{title}</h4>
      <div className="flex flex-wrap gap-8">
        {movies.slice(0, 6).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
