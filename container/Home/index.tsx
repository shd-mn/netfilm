import { getMovieGenres } from "@/services/fetchData";
import Hero from "./Hero";
import Devices from "./Devices";
import Questions from "./Questions";
import Categories from "./Categories";
import SubscriptionSection from "../Subscriptions/SubscriptionSection";
import Banner from "@/components/common/Banner";

async function Home() {
  const { genres: movieGenre } = await getMovieGenres();

  return (
    <main>
      <Hero />
      <Categories genres={movieGenre} />
      <Devices />
      <Questions />
      <SubscriptionSection />
      <Banner />
    </main>
  );
}

export default Home;
