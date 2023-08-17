import React from "react";
import { getMovieGenres, getTvShowGenres } from "@/services/fetchData";
import GenreList from "./GenreList";

const Navbar = async () => {
  const movieGenresPromise = getMovieGenres();
  const tvGenresPromise = getTvShowGenres();

  const [{ genres: movieGenres }, { genres: tvShowGenres }] = await Promise.all(
    [movieGenresPromise, tvGenresPromise]
  );
  return (
    <nav className="flex h-full items-center gap-8">
      <div className="group relative flex h-full items-center">
        <button className="p-2" type="button">
          Movies
        </button>
        <GenreList pathname="/movies/" genres={movieGenres} />
      </div>
      <div className="group relative flex h-full items-center">
        <button className="p-2" type="button">
          Tv Shows
        </button>
        <GenreList pathname="/tv-shows/" genres={tvShowGenres} />
      </div>
    </nav>
  );
};

export default Navbar;
