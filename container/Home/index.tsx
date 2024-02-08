import { getMovieGenres } from "@/services/fetchData";
import Hero from "./Hero";
import StreamingExperience from "./StreamingExperience";
import Questions from "./Questions";
import Categories from "./Categories";
import Subscriptions from "./Subscriptions";

async function Home() {
  const { genres: movieGenre } = await getMovieGenres();

  return (
    <main>
      <Hero />
      <Categories genres={movieGenre} />
      <StreamingExperience />
      <Questions />
      <Subscriptions />
    </main>
  );
}

export default Home;
