import Navbar from "./Navbar";
import HeaderAction from "./HeaderAction";
import Logo from "../common/Logo";

export default function Header() {
  return (
    <header className="mb-20 h-28 w-full py-5">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        <Navbar />

        <HeaderAction />
      </div>
    </header>
  );
}
