import React from "react";
import { MovieIcon } from "@/utils/icons";
import Link from "next/link";

type Props = {
  genre: string;
};

const NotFound: React.FC<Props> = ({ genre }) => {
  return (
    <div className="container flex h-full min-h-[800px] flex-col items-center justify-center gap-8 pt-20">
      <h1 className="flex items-center  text-[16rem] leading-3 text-red-700">
        4
        <MovieIcon className="h-[16rem] w-[16rem] fill-red-700" />4
      </h1>
      <h3 className="text-2xl flex gap-2">
        We couldn&apos;t find the Movies in
        <span className="font-medium text-red-600">
          {decodeURIComponent(genre)}
        </span>
        list!
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
