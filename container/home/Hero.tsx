import React from "react";
import Image from "next/image";
import { Result } from "@/utils/movieProps";

type Props = {
  movie: Result;
};
const Hero: React.FC<Props> = ({ movie }) => {
  const src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  return (
    <section className="relative mx-auto mb-24 flex h-1/2 max-w-[1920px]  justify-start max-h-[1020px] lg:h-screen">
      <Image
        className="absolute top-0 -z-10  h-full w-full  object-cover"
        src={src}
        alt="bg"
        width={1920}
        height={1080}
      />
      <div className="container flex h-full pt-20">
        <div className="flex w-1/2 flex-col items-start justify-center gap-2">
          <h1 className="text-7xl">{movie.title}</h1>
          <p className="line-clamp-3">{movie.overview}...</p>
          <button type="button" className="btn-fill">
            Play Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
