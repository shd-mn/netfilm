import Hero from "./Hero";
import Movies from "@/mocks/movies.json";
import Popular from "./Popular";
const HomePage = () => {
  return (
    <div className="">
      <Hero movie={Movies.results[2]} />
      <Popular movies={Movies} />
    </div>
  );
};
export default HomePage;
