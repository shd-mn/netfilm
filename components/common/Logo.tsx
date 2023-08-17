import Link from "next/link";
import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 text-3xl font-medium tracking-wider"
    >
      <BsFillPlayCircleFill className="fill-red-600 " />
      NETFILM
    </Link>
  );
};

export default Logo;
