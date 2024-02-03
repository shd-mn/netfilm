"use client";
import React, { useState } from "react";
import NavButton from "./UI/NavButton";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import type { Genres } from "@/utils/genreProps";

type PropTypes = {
  genres: Genres[];
};

function GenreSlider({ genres }: PropTypes) {
  const [slider, setSlider] = useState(0);

  const itemsPerSlide = 4;

  const sliderItems: Genres[][] = [];

  for (let i = 0; i < genres.length; i += itemsPerSlide) {
    sliderItems.push(genres.slice(i, i + itemsPerSlide));
  }

  const handlePrevSlide = () => {
    if (slider > 0) {
      setSlider((prev) => prev - 1);
    } else {
      setSlider(genres.length / 4 - 1);
    }
  };

  const handleNextSlide = () => {
    if (slider < genres.length / 4 - 1) {
      setSlider((prev) => prev + 1);
    } else {
      setSlider(0);
    }
  };

  return (
    <div className="mb-24">
      <header className="mb-12 flex items-center justify-between">
        <h2 className="text-4xl font-bold">Our Genres</h2>
        <div className="flex items-center gap-4 rounded-xl border border-black-12 bg-black-06 p-4">
          <NavButton
            icon={<HiArrowLeft size={28} />}
            handleClick={handlePrevSlide}
          />
          <div className="flex gap-1">
            {sliderItems.map((_, idx) =>
              slider === idx ? (
                <button
                  key={idx}
                  type="button"
                  className="h-1 w-5 rounded-full bg-primary-45"
                  onClick={() => setSlider(idx)}
                ></button>
              ) : (
                <button
                  key={idx}
                  type="button"
                  className="h-1 w-4 rounded-full bg-black-20"
                  onClick={() => setSlider(idx)}
                ></button>
              )
            )}
          </div>
          <NavButton
            icon={<HiArrowRight size={28} />}
            handleClick={handleNextSlide}
          />
        </div>
      </header>
      <div className="grid grid-cols-4 justify-between gap-8 ">
        {sliderItems[slider].map((item) => (
          <article key={item.id} className="h-96 bg-red-400 p-8">
            {item.name}
          </article>
        ))}
      </div>
    </div>
  );
}

export default GenreSlider;
