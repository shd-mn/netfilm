import React from "react";
import { MovieIcon } from "@/utils/icons";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container flex h-full flex-col items-center justify-center gap-8 pt-20">
      <h1 className="mt-40 flex items-center  text-[16rem] leading-3 text-red-700">
        4
        <MovieIcon className=" h-[16rem] w-[16rem] fill-red-700" />4
      </h1>
      <h3 className="text-2xl">
        We couldn&apos;t find the movie you looking for!
      </h3>
      <Link
        className="rounded-md bg-red-700 px-5 py-2 hover:bg-red-800"
        href="/"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
