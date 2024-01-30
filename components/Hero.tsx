import React from "react";
import {
  HiPlay,
  HiPlus,
  HiOutlineHandThumbUp,
  HiSpeakerWave,
} from "react-icons/hi2";
import { getPopularMovies } from "@/services/fetchData";
import Image from "next/image";

const Hero = async () => {
  const { results } = await getPopularMovies();
  const cover = results[0];
  return (
    <section>
      <div className="container relative">
        <div className="">
          <div className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center">
            <h2 className="mb-2 text-4xl font-bold text-white">
              {cover?.title}
            </h2>
            <p className="text-center text-lg text-grey-60">{cover.overview}</p>
            <div className="flex gap-2">
              <button
                className="flex items-center rounded-lg bg-primary-45 px-[14px] py-4"
                type="button"
              >
                <HiPlay size={18} />{" "}
                <span className="text-lg font-semibold">Play Now</span>
              </button>
              <button
                className="flex items-center rounded-lg border border-black-15 bg-black-06 p-4"
                type="button"
              >
                <HiPlus size={18} />
              </button>
              <button
                className="flex items-center rounded-lg border border-black-15 bg-black-06 p-4"
                type="button"
              >
                <HiOutlineHandThumbUp size={18} />
              </button>
              <button
                className="flex items-center rounded-lg border border-black-15 bg-black-06 p-4"
                type="button"
              >
                <HiSpeakerWave size={18} />
              </button>
            </div>
          </div>
          <figure className="">
            <Image
              src={`https://image.tmdb.org/t/p/original/${cover?.backdrop_path}`}
              className="rounded-xl"
              alt={cover.title}
              width="1594"
              height="835"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
