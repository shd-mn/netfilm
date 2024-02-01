import React, { Dispatch } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

type PropTypes = {
  slider: number;
  setSlider: Dispatch<React.SetStateAction<number>>;
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
};

function HeroSlider({
  slider,
  setSlider,
  handlePrevSlide,
  handleNextSlide,
}: PropTypes) {
  const sliderLength = new Array(4).fill(0);
  return (
    <div className="flex w-full items-center justify-between">
      <button
        type="button"
        className="h-14 w-14 rounded-lg border-2 border-black-15 bg-black-06"
        onClick={() => handlePrevSlide()}
      >
        <span className="flex items-center justify-center">
          <HiArrowLeft size={28} />
        </span>
      </button>
      <div className="flex gap-1">
        {sliderLength.map((item, idx) =>
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
      <button
        type="button"
        className="h-14 w-14 rounded-lg border-2 border-black-15 bg-black-06"
        onClick={() => handleNextSlide()}
      >
        <span className="flex items-center justify-center">
          <HiArrowRight size={28} />
        </span>
      </button>
    </div>
  );
}

export default HeroSlider;
