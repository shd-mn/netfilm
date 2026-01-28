"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import { getMovieGenres, getTvShowGenres } from "@/services/fetchData";
// import GenreList from "./GenreList";

const Navbar = () => {

  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-x-5 rounded-xl border-4 border-black-12 bg-black-06 px-10 py-[10px]">
      <Link
        href="/"
        className={`rounded-lg px-6 py-[14px] text-lg text-grey-75 duration-200 ease-in-out hover:bg-black-10 ${
          pathname === "/" && "bg-black-10 font-medium text-white"
        }`}
      >
        Home
      </Link>
      <Link
        href="/movies"
        className={`rounded-lg px-6 py-[14px] text-lg text-grey-75 duration-200 ease-in-out hover:bg-black-10 ${
          pathname === "/movies" && "bg-black-10 font-medium text-white"
        }`}
      >
        Movies
      </Link>
      <Link
        href="/support"
        className={`rounded-lg px-6 py-[14px] text-lg text-grey-75 duration-200 ease-in-out hover:bg-black-10 ${
          pathname === "/support" && "bg-black-10 font-medium text-white"
        }`}
      >
        Support
      </Link>
      <Link
        href="/subscriptions"
        className={`rounded-lg px-6 py-[14px] text-lg text-grey-75 duration-200 ease-in-out hover:bg-black-10 ${
          pathname === "/subscriptions" && "bg-black-10 font-medium text-white"
        }`}
      >
        Subscriptions
      </Link>
    </nav>
  );
};

export default Navbar;
