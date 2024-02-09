"use client";
import React, { useState } from "react";
import {
  HiPlay,
  HiPlus,
  HiOutlineHandThumbUp,
  HiOutlineSpeakerWave,
} from "react-icons/hi2";
import Image from "next/image";
import HeroSlider from "./HeroSlider";
import { MovieResult } from "@/utils/movieTypes";

type PropTypes = {
  movies: MovieResult[];
};

const Hero = ({ movies }: PropTypes) => {
  const [slider, setSlider] = useState(0);

  const handlePrevSlide = () => {
    if (slider > 0) {
      setSlider((prev) => prev - 1);
    } else {
      setSlider(3);
    }
  };
  const handleNextSlide = () => {
    if (slider < 3) {
      setSlider((prev) => prev + 1);
    } else {
      setSlider(0);
    }
  };

  const cover = movies[slider];

  return (
    <section className="mb-44">
      <div className="container relative h-[800px]">
        <div className="absolute bottom-0 left-1/2 z-10 flex w-full -translate-x-1/2 flex-col items-center p-12 pb-5">
          {/* Title */}
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-4xl font-bold text-white">
              {cover?.title}
            </h2>
            <p className="line-clamp-2 w-full px-36 text-center text-lg font-medium text-grey-60">
              {cover.overview}
            </p>
          </div>
          {/* Action Buttons */}
          <div className="mb-14 flex gap-2">
            <button
              className="flex h-14 items-center gap-1 rounded-lg bg-primary-45 px-[14px]"
              type="button"
            >
              <span className="flex items-center justify-center">
                <HiPlay size={28} />
              </span>
              <span className="text-lg font-semibold">Play Now</span>
            </button>
            <button
              className="h-14 w-14 rounded-lg border-2 border-black-15 bg-black-06"
              type="button"
            >
              <span className="flex items-center justify-center">
                <HiPlus size={28} />
              </span>
            </button>
            <button
              className="h-14 w-14 rounded-lg border-2 border-black-15 bg-black-06"
              type="button"
            >
              <span className="flex items-center justify-center">
                <HiOutlineHandThumbUp size={28} />
              </span>
            </button>

            <button
              className="h-14 w-14 rounded-lg border-2 border-black-15 bg-black-06"
              type="button"
            >
              <span className="flex items-center justify-center">
                <HiOutlineSpeakerWave size={28} />
              </span>
            </button>
          </div>

          {/* Slide Button */}
          <HeroSlider
            slider={slider}
            setSlider={setSlider}
            handlePrevSlide={handlePrevSlide}
            handleNextSlide={handleNextSlide}
          />
        </div>
        <figure className="border-3 relative h-full w-full overflow-hidden rounded-xl border-black-08">
          <span className="absolute bottom-0 flex h-2/3 w-full rounded-xl bg-gradient-to-b from-transparent to-black-06"></span>
          <Image
            src={`https://image.tmdb.org/t/p/original/${cover?.backdrop_path}`}
            className="h-full w-full rounded-xl object-cover"
            alt={cover.title}
            width="1594"
            height="700"
            priority
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
