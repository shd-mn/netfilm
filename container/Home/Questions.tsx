"use client";
import { useState } from "react";
import SectionHeader from "./components/SectionHeader";
import Dropdown from "./components/Dropdown";
import Button from "@/components/UI/Button";
import { questionsData, questionsHeaderData } from "./data/questionsData";

function Questions() {
  const [active, setActive] = useState<number | null>(null);
  const handleClick = () => {};
  return (
    <section className="mb-36" id="faq">
      <div className="container">
        <SectionHeader
          data={questionsHeaderData}
          element={<Button title="Ask a Question" handleClick={handleClick} />}
        />
        <div className="grid grid-cols-2 gap-x-20">
          {questionsData.map((question) => (
            <Dropdown
              key={question.id}
              data={question}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Questions;
