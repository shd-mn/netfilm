import Hero from "./Hero";
import Movies from "@/mocks/movies.json";
import Popular from "./Popular";
const HomePage = () => {
  return (
    <div className="h-[2000px]">
      <Hero movie={Movies.results[0]} isCompact />
      <Popular movies={Movies} />
    </div>
  );
};
export default HomePage;
