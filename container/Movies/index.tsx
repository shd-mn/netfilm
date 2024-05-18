import React from "react";
import { getMovieGenres, getPopularMovies } from "@/services/fetchData";
import Hero from "@/components/Hero";
import PopularMovies from "./PopularMovies";
import MoviesGenre from "./MoviesGenre";
import type { MovieTypes } from "@/utils/movieTypes";
import type { GenreTypes } from "@/utils/genreTypes";
import Banner from "@/components/common/Banner";

async function Movies() {
  const movieData = getPopularMovies();
  const genreData = getMovieGenres();

  const [{ results: popularMovies }, { genres: movieGenre }]: [
    MovieTypes,
    GenreTypes
  ] = await Promise.all([movieData, genreData]);

  return (
    <main>
      <Hero movies={popularMovies} />
      <section className="mb-44">
        <div className="container rounded-xl border-2 border-black-15 p-12">
          <MoviesGenre genres={movieGenre} />
          <PopularMovies movies={popularMovies} />
        </div>
      </section>
      <Banner />
    </main>
  );
}

export default Movies;
