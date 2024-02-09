"use client";
import Button from "@/components/UI/Button";
import SectionHeader from "./components/SectionHeader";
import { questionsHeaderData } from "./constants";
import { HiPlay } from "react-icons/hi2";

function Questions() {
  const handleClick = () => {};
  return (
    <section className="mb-36">
      <div className="container">
        <SectionHeader
          data={questionsHeaderData}
          element={
            <Button
              title="Ask a Question"
              icon={<HiPlay size={22} />}
              handleClick={handleClick}
            />
          }
        />
      </div>
    </section>
  );
}

export default Questions;
