import GenreSlider from "@/components/GenreSlider";
import { Genres } from "@/utils/genreProps";
import React from "react";

type PropTypes = {
  genres: Genres[];
};

function MoviesGenre({ genres }: PropTypes) {
  return <GenreSlider genres={genres} />;
}

export default MoviesGenre;
