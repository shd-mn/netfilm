import React from 'react';
import Image from "next/image";
import { MovieProps } from '@/utils/movieProps';

type Props = {
  movie: MovieProps,
  isCompact: boolean,
};
const Hero: React.FC<Props> = ({ movie, isCompact = true }) => {
  const src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  return (
    <section className='relative flex justify-start w-full h-1/2 lg:h-screen'>
      <Image
        className="absolute top-0 -z-10  w-full object-cover h-full"
        src={src}
        alt="bg"
        width={1920}
        height={1080}
      />
      <div className='container flex h-full'>
        <div className='flex w-1/2 flex-col justify-center items-start gap-2'>
          <h1 className='text-7xl'>
            {movie.title}

          </h1>
          <p>{movie.overview.substring(0, 200)}...</p>
          <button className='rounded px-9 py-3 bg-red-700' >Play Now</button>

        </div>
      </div>
    </section>
  )
}

export default Hero;