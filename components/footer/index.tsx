import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-zinc-950">
      <div className="container flex h-20 items-center justify-center gap-1 text-lg font-medium">
        Made by
        <Link
          className="underline underline-offset-4 hover:no-underline"
          href="https://linkedin.com/in/shadman-alizada"
          target="_blank"
        >
          Shadman Alizada
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
