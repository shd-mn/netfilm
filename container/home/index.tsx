import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/services/fetchData";
import Hero from "./Hero";
import MoviesSection from "./MoviesSection";

async function HomePage() {
  const popularPromise = getPopularMovies();
  const topRatedPromise = getTopRatedMovies();
  const upComingPromise = getUpcomingMovies();

  const [
    { results: popularMovies },
    { results: upComingMovies },
    { results: topRatedMovies },
  ] = await Promise.all([popularPromise, upComingPromise, topRatedPromise]);

  return (
    <div>
      <Hero movie={popularMovies[0]} />
      <MoviesSection title="Popular Movies" movies={popularMovies} />
      <MoviesSection title="Upcoming Movies" movies={upComingMovies} />
      <MoviesSection title="Top Rated Movies" movies={topRatedMovies} />
    </div>
  );
}
export default HomePage;
