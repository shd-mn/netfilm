import Navbar from "./Navbar";
import HeaderAction from "./HeaderAction";
import Logo from "../common/Logo";
import { useEffect } from "react";

const Header = () => {
  return (
    <header className="absolute top-0 z-50 w-full bg-transparent-black backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

      

      </div>
    </header>
  );
};
export default Header;
