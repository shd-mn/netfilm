import Navbar from "./Navbar";
import HeaderAction from "./HeaderAction";
import Logo from "../common/Logo";

const Header = () => {
  return (
    <header className="h-28 py-5 w-full mb-12">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        <Navbar />

        <HeaderAction />
      </div>
    </header>
  );
};
export default Header;
