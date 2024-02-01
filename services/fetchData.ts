import axios from "axios";
import { MovieTypes } from "@/utils/movieTypes";
import { GenreProps } from "@/utils/genreProps";

const API_URL = "https://api.themoviedb.org/3";

async function fetchData(pathname: string, query: string = "") {
  try {
    const { data } = await axios(
      `${API_URL}${pathname}?api_key=${process.env.API_KEY}${query}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
}

const getPopularMovies = async () => {
  const data: MovieTypes = await fetchData("/movie/popular", "&page=1");
  return data;
};

const getUpcomingMovies = async () => {
  const data: MovieTypes = await fetchData("/movie/upcoming", "&page=1");
  return data;
};

const getTopRatedMovies = async () => {
  const data: MovieTypes = await fetchData("/movie/top_rated", "&page=1");
  return data;
};

const getMovieGenres = async () => {
  const data: GenreProps = await fetchData("/genre/movie/list");
  return data;
};
const getTvShowGenres = async () => {
  const data: GenreProps = await fetchData("/genre/tv/list");
  return data;
};
const discoverMovies = async (query: string) => {
  const data: MovieTypes = await fetchData("/discover/movie", query);
  return data;
};

export {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMovieGenres,
  getTvShowGenres,
  discoverMovies,
};

export default fetchData;
