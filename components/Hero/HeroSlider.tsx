import React, { Dispatch } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import NavButton from "../UI/NavButton";

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
      <NavButton
        icon={<HiArrowLeft size={28} />}
        handleClick={handlePrevSlide}
        color="bg-black-06"
      />
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
      <NavButton
        icon={<HiArrowRight size={28} />}
        handleClick={handleNextSlide}
        color="bg-black-06"
      />
    </div>
  );
}

export default HeroSlider;
