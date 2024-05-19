import Banner from "@/components/common/Banner";
import Questions from "../Home/Questions";
import SupportForm from "./SupportForm";

export default function Support() {
  return (
    <main>
      <SupportForm />
      <Questions />
      <Banner />
    </main>
  );
}
