import SectionHeader from "./components/SectionHeader";
import GenreSlider from "@/components/GenreSlider";
import { categoriesHeader } from "./data/categoriesData";
import type { Genres } from "@/utils/genreTypes";

function Categories({ genres }: { genres: Genres[] }) {
  return (
    <section className="mb-36">
      <div className="container">
        <SectionHeader data={categoriesHeader} />
      </div>
    </section>
  );
}

export default Categories;
