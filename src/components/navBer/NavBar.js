import React, { useState } from "react";

const NavBar = () => {
  // links :
  const links = ["home", "product", "about us"];
  const [open, setOpen] = useState(false);
  const openNav = () => {
    setOpen(!open);
    console.log(open);
    // const body = document.querySelector("body");
    // body.scrollY > 100 && setOpen(!open);
  };
  return (
    <header>
      <nav className="container mx-auto p-6">
        <div className="flex justify-between items-center">
          <div className="logo font-bold text-base md:text-lg lg:text-xl">
            E-SHADOW007
          </div>
          <ul className="hidden lg:flex items-center gap-4 capitalize">
            {/* call the links */}
            {links.map((link, index) => (
              <li key={index}>
                <a
                  class="text-sm md:text-base text-black hover:text-gray-500 hover:ease-in hover:duration-300"
                  href={`#${link}`}
                >
                  {link}
                </a>
              </li>
            ))}
            {/* close calling links */}
            <div className="flex gap-4">
              <button className="bg-black px-5 py-2 text-white capitalize rounded-md hover:scale-105 duration-300">
                sing up
              </button>
              <button className="border border-black px-5 py-2 capitalize rounded-md hover:scale-105 duration-300">
                sing in
              </button>
            </div>
          </ul>
          {/* bottun open */}
          <div onClick={openNav} className="sm:hidden bars">
            <div></div>
            <div></div>
            <div className="last-bar"></div>
          </div>
        </div>
      </nav>
      {/* mobile nav bar */}
      <ul
        className={
          open
            ? "absolute mobile sm:hidden right-0 z-10 w-1/2 bg-zinc-100 p-6 capitalize text-center rounded-lg shadow-lg "
            : "hidden"
        }
      >
        {/* call the links */}
        {links.map((link, index) => (
          <li
            key={index}
            className="py-2 w-full hover:bg-zinc-200 duration-300 border-b border-neutral-300"
          >
            <a
              class="text-sm block w-full text-black hover:text-gray-500 ease-in duration-300 px-5 py-1 md:px-12"
              href={`#${link}`}
            >
              {link}
            </a>
          </li>
        ))}
        <div className="pt-8 flex flex-col gap-3">
          <button className="bg-black px-5 py-2 text-white capitalize rounded-md hover:scale-105 duration-300">
            sing up
          </button>
          <button className="border border-black px-5 py-2 capitalize rounded-md hover:scale-105 duration-300">
            sing in
          </button>
        </div>
        {/* close calling links */}
      </ul>
    </header>
  );
};

export default NavBar;
