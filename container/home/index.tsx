import Hero from "./Hero";
import Movies from '@/mocks/movies.json';
const HomePage = () => {
  return (
    <div className="h-[2000px]" >
      <Hero movie={Movies.results[0]} isCompact/>
    </div>
  );
};
export default HomePage;
