"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import { getMovieGenres, getTvShowGenres } from "@/services/fetchData";
// import GenreList from "./GenreList";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState();

  return (
    <nav className="flex items-center gap-x-5 rounded-xl border-4 border-black-12 bg-black-06 px-10 py-[10px]">
      <Link href="/" className="text-lg text-grey-75">
        Home
      </Link>
      <Link
        href="/movies"
        className="rounded-lg bg-black-10 px-6 py-[14px] text-lg font-medium"
      >
        Movies
      </Link>
      <Link href="/support" className="text-lg text-grey-75">
        Support
      </Link>
      <Link href="/subscriptions" className="text-lg text-grey-75">
        Subscriptions
      </Link>
    </nav>
  );
};

export default Navbar;
