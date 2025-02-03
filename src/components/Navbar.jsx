import React from "react";
import { navMenus } from "../utils/data";

function Navbar() {
  return (
    <header className="bg-transparent text-black text-center text-4xl p-2 flex justify-between px-10 fixed w-[100vw]">
      <span className="font-deceptibotsHalftone text-[2vw] p-1 " data-aos="fade-down">
        Lalit Sharma
      </span>
      <nav className="flex gap-x-6  items-center font-megatronCondensed text-[1.1vw]">
        {navMenus.map((item, index) => (
          <a href={`#${item.id}`} key={index} className="">
            {item.menu}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
