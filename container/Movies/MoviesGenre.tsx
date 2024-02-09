import GenreSlider from "@/components/GenreSlider";
import { Genres } from "@/utils/genreTypes";
import React from "react";

type PropTypes = {
  genres: Genres[];
};

function MoviesGenre({ genres }: PropTypes) {
  return <GenreSlider genres={genres} />;
}

export default MoviesGenre;
