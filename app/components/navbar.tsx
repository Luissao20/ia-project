"use client";

import Image from "next/image";
import Link from "next/link";
import SlideMenu from "./slideInMenu";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [togglemenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(!togglemenu);
  };

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setHidden(true);
      } else if (scrollTop < lastScrollTop) {
        setHidden(false);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`${
        hidden ? "-translate-y-full" : "translate-y-0"
      } fixed w-full border-2 border-[#293750] rounded-b-2xl flex h-[10vh] lg:h-[12vh] items-center justify-between shadow-lg bg-white p-5 z-10 lg:pr-28 transition-transform duration-200`}
    >
      <Link href="/">
        <div className="flex lg:p-8 relative pl-2 w-16 md:w-16 lg:w-[161px] lg:ml-56">
          <Image
            src="/logos/logo2.png"
            alt="Logo"
            width={200}
            height={200}
            quality={100}
          />
        </div>
      </Link>
      <ul className="lg:flex lg:gap-3 lg:text-xl lg:text-[#1c5a6c] lg:items-center lg:justify-center">
        <li>
          <Link
            className="lg:p-3 lg:border-2 lg:border-transparent lg:hover:easy-in-out lg:duration-500 lg:hover:border-[#293750] lg:rounded-2xl lg:cursor-pointer hidden lg:block"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="lg:p-3 lg:border-2 lg:border-transparent lg:hover:easy-in-out lg:duration-500 lg:hover:border-[#293750] lg:rounded-2xl lg:cursor-pointer hidden lg:block"
            href="/services"
          >
            Our Services
          </Link>
        </li>
        <li>
          <Link
            className="lg:p-3 lg:border-2 lg:border-transparent lg:hover:easy-in-out lg:duration-500 lg:hover:border-[#293750] lg:rounded-2xl lg:cursor-pointer hidden lg:block"
            href="/case-studies"
          >
            Case Studies
          </Link>
        </li>
        <li>
          <Link
            className="lg:p-3 lg:border-2 lg:border-transparent lg:hover:easy-in-out lg:duration-500 lg:hover:border-[#293750] lg:rounded-2xl lg:cursor-pointer hidden lg:block"
            href="/why-agentify"
          >
            Why Agentify
          </Link>
        </li>
        <li>
          <Link
            className="lg:p-3 lg:border-2 lg:border-transparent lg:hover:easy-in-out lg:duration-500 lg:hover:border-[#293750] lg:rounded-2xl lg:cursor-pointer hidden lg:block"
            href="/resources"
          >
            Resources
          </Link>
        </li>
        <li>
          <button className="lg:p-3 lg:text-cyan-800 lg:text-2xl lg:border-2 lg:rounded-2xl lg:border-[#293750] lg:transition lg:duration-500 lg:hover:scale-[1.1] lg:hover:bg-[#1a5c6c] lg:hover:text-white hidden lg:block lg:w-[280px]">
            Book a Discovery Call
          </button>
        </li>
      </ul>
      <Image
        onClick={handleClick}
        src="/burguer-menu2.svg"
        alt="Burger Menu"
        width={40}
        height={40}
        className="lg:hidden absolute right-8 bg-black"
      />
      {togglemenu && <SlideMenu handleClick={handleClick} />}
    </nav>
  );
}