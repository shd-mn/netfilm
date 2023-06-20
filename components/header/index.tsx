import Link from "next/link";
import { BsFillPlayCircleFill, BsSearch } from "react-icons/bs";
import { IoPersonCircleSharp, IoPersonSharp, IoSearch } from "react-icons/io5";
const Header = () => {
  return (
    <header className="absolute top-0 w-full bg-[#18181b8c] backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between ">
        <Link
          href="/"
          className="flex items-center gap-2 text-3xl font-medium tracking-wider"
        >
          <BsFillPlayCircleFill className="fill-red-700" />
          NETFILM
        </Link>
        <nav className="flex gap-8">
          <Link href="/movies">Movies</Link>
          <Link href="/tv-shows">Tv Shows</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button type="button">
            <IoSearch className="text-2xl" />
          </button>
          <button
            className="inline-block rounded-full bg-gray-800 p-2"
            type="button"
          >
            <IoPersonSharp className="text-2xl " />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
