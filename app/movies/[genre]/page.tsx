import React from "react";
import { discoverMovies } from "@/services/fetchData";
import MovieCard from "@/components/common/MovieCard";
import NotFound from "./not-found";

type Props = {
  params: {
    genre: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};
const MoviesPage: React.FC<Props> = async ({ params, searchParams }) => {
  const id = searchParams.with_genres;
  const { results } = await discoverMovies(`&with_genres=${id}&page=1`);
  if (results.length === 0) {
    return <NotFound genre={params.genre} />;
  }
  return (
    <div className="container pt-20">
      <h4 className="mb-12 mt-12 text-2xl">
        {decodeURIComponent(params.genre)}
      </h4>
      <div className="grid grid-cols-6 gap-8">
        {results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
