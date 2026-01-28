"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Hero.css";

import { Pagination, Navigation } from "swiper/modules";
import { MovieResult } from "@/utils/movieTypes";
import Image from "next/image";

type PropTypes = {
  movies: MovieResult[];
};

export default function Hero({ movies }: PropTypes) {
  return (
    <section className="mb-44">
      <div className="container h-[800px]">
        <Swiper
          //   spaceBetween={30}
          navigation={true}
          pagination={{
            type: "custom",
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className={`mySwiper rounded-xl`}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id} className="relative">
              <div className="relative z-10 h-full w-full overflow-hidden border-black-08 from-transparent to-black-08 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-b">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  className="w-auto rounded-xl object-cover"
                  alt={movie.title}
                  width="1594"
                  height="700"
                  priority
                />
              </div>

              <div className="absolute bottom-0 left-1/2 z-10 flex w-full -translate-x-1/2 flex-col items-center p-12 pb-5">
                {/* Title */}
                <div className="mb-8 text-center">
                  <h2 className="mb-2 text-4xl font-bold text-white">
                    {movie.title}
                  </h2>
                  <p className="line-clamp-2 w-full px-36 text-center text-lg font-medium text-grey-60">
                    {movie.overview}
                  </p>
                </div>
                {/* Action Buttons */}
                {/* <div className="mb-14 flex gap-2">
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
                      </div> */}
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev"></div>
          {/* <div className="swiper-button-next"></div> */}
        </Swiper>
      </div>
    </section>
  );
}
