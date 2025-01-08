'use client'

import Image from "next/image";
import Link from "next/link";
import SlideMenu from "./slideInMenu";
import { useEffect, useState } from "react";


export default function Navbar() {
  const [togglemenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(!togglemenu);
  }

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setHidden(true);
      } else {
        setHidden(false);
      } lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className={hidden ? "border-2 border-[#594A28] lg:relative lg:overflow-hidden flex lg:pr-48 lg:h-[14vh] lg:flex lg:items-center lg:justify-between lg:shadow-lg lg:max-h-full  bg-white lg:p-5 lg:sticky lg:top-0 lg:z-10 space-x-4 lg:flex-row transition-transform duration-300 -translate-y-full" : "lg:relative flex lg:pr-48 lg:h-[14vh] lg:max-h-full lg:overflow-hidden lg:flex lg:items-center lg:justify-between bg-white lg:p-5 lg:shadow-lg lg:rounded-b-2xl lg:sticky lg:top-0 lg:z-10 space-x-4 lg:flex-row transition-transform duration-300 translate-y-0 border-2 border-[#594A28]"}>
      <Link href="/">
        <div className="flex p-8 relative w-40 lg:w-48 lg:ml-56">
          <Image
            src='/logo_final.png'
            alt="Logo"
            layout="responsive"
            width={200}
            height={200}
            quality={100}
            sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 192px"
          />
        </div>
      </Link>
      <ul className="lg:flex lg:gap-3 lg:text-2xl lg:text-cyan-800 lg:items-center lg:justify-center">
        <li>
          <Link className="lg:p-3 lg:border-2 lg:border-transparent lg:hover:easy-in-out lg:duration-500 lg:hover:border-[#594A28] lg:rounded-2xl lg:cursor-pointer hidden lg:block" href="/">Home</Link>
        </li>
        <li>
          <Link className="lg:p-3 lg:border-2 lg:border-transparent lg:hover:easy-in-out lg:duration-500 lg:hover:border-[#594A28] lg:rounded-2xl lg:cursor-pointer hidden lg:block" href="/services">Services</Link>
        </li>
        <li>
          <Link className="lg:p-3 lg:border-2 lg:border-transparent lg:hover:easy-in-out lg:duration-500 lg:hover:border-[#594A28] lg:rounded-2xl lg:cursor-pointer hidden lg:block" href="/case-studies">Case Studies</Link>
        </li>
        <li>
          <Link className="lg:p-3 lg:border-2 lg:border-transparent lg:hover:easy-in-out lg:duration-500 lg:hover:border-[#594A28] lg:rounded-2xl lg:cursor-pointer hidden lg:block" href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link className="lg:p-3 lg:border-2 lg:border-transparent lg:hover:easy-in-out lg:duration-500 lg:hover:border-[#594A28] lg:rounded-2xl lg:cursor-pointer hidden lg:block" href="/about">About</Link>
        </li>
        <li>
          <Link className="lg:p-3 lg:border-2 lg:border-transparent lg:hover:easy-in-out lg:duration-500 lg:hover:border-[#594A28] lg:rounded-2xl lg:cursor-pointer hidden lg:block" href="/contact">Contact</Link>
        </li>
        <li>
          <button className="lg:p-3 lg:text-cyan-800 lg:text-2xl lg:border-2 lg:rounded-2xl lg:border-[#594A28] lg:transition lg:duration-500 lg:hover:scale-[1.1] lg:hover:bg-cyan-900 lg:hover:text-white hidden lg:block">Get Started</button>
        </li>
      </ul>
      <Image
        onClick={handleClick}
        src='/burguer-menu2.svg'
        alt="Burger Menu"
        width={40}
        height={40}
        className="lg:hidden"
      />
      {togglemenu && <SlideMenu handleClick={handleClick} />}
    </nav>
  );
}
