import { useEffect, useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";

import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";
import AccountBtns from "./AccountBtns";
import NavMobile from "./NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setBg(true);
      } else {
        setBg(false);
      }
    });
  });

  return (
    <header className={`fixed left-0 w-full py-8 lg:py-10 z-20 transition-all ${bg ? "bg-darkblue" : "bg-none"}`}>
      <div className="container flex items-center justify-between">
        {/* logo */}
        <a href="#">
          <img src={Logo} alt="" />
        </a>

        {/* menu btn */}
        <button className="text-2xl cursor-pointer lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? <CgClose /> : <CgMenuRight />}
        </button>

        {/* nav */}
        <nav className="hidden lg:flex lg:items-center gap-14">
          <Nav />
          <AccountBtns />
        </nav>

        {/* mobile nav */}
        <nav
          className={`bg-violet fixed top-0 h-screen w-80 transition-all duration-300 lg:hidden ${
            mobileNav ? "left-0" : "-left-full"
          }`}
        >
          <NavMobile />
        </nav>
      </div>
    </header>
  );
};

export default Header;
