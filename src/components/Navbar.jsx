import { useState } from 'react';
import { navMenus } from "../utils/data";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent text-black text-center text-4xl p-2 flex justify-between px-10 fixed w-[100vw]">
      <span className="font-deceptibotsHalftone text-[2vw] p-1 " data-aos="fade-down">
        Lalit Sharma
      </span>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>
      <nav className={`md:flex gap-x-6 items-center font-megatronCondensed text-[1.1vw] ${isOpen ? 'block' : 'hidden'} md:block`}>
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
