import React from "react";
import { Genres } from "@/utils/genreProps";
import Link from "next/link";
type Props = {
  genres: Genres[];
};
const GenreList: React.FC<Props> = ({ genres }) => {
  return (
    <div className="invisible absolute top-full grid w-96 grid-cols-2 gap-2  rounded-md bg-slate-600 p-2  group-hover:visible">
      {genres.map((item) => (
        <Link
          href={{
            pathname: `/movies/${item.name}/`,
            query: { with_genres: `${item.id}` },
          }}
          className="rounded-md px-4 py-2 hover:bg-slate-900"
          key={item.id}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default GenreList;
