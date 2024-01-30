"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import { getMovieGenres, getTvShowGenres } from "@/services/fetchData";
// import GenreList from "./GenreList";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState();
  // const movieGenresPromise = getMovieGenres();
  // const tvGenresPromise = getTvShowGenres();

  // const [{ genres: movieGenres }, { genres: tvShowGenres }] = await Promise.all(
  //   [movieGenresPromise, tvGenresPromise]
  // );
  const ur = usePathname();
  return (
    <nav className="flex items-center gap-3 rounded-xl border-4 border-black-12 px-10 py-[10px]">
      <Link href="/" className="p-2 text-lg">
        Home
      </Link>
      <Link
        href="/movies"
        className="rounded-lg bg-black-10 px-6 py-[14px] text-lg font-medium"
      >
        Movies
      </Link>
      <Link href="/" className="p-2 text-lg">
        Support
      </Link>
      <Link href="/" className="p-2 text-lg">
        Subscriptions
      </Link>
    </nav>
  );
};

export default Navbar;
