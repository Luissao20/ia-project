import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex lg:pr-20 lg:h-[14vh] lg:flex lg:items-center lg:justify-between lg:p-5 lg:bg-[#000000] bg-[#000000] lg:sticky lg:top-0 lg:z-10 space-x-4 lg:overflow-hidden lg:transition-all lg:max-h-full lg:flex-row">
      <Link href="/">
        <div className="flex p-8 relative w-40 lg:w-48">
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
      <ul className="lg:flex lg:gap-10 lg:text-2xl lg:text-cyan-500 lg:items-center lg:justify-center">
        <li>
          <Link className="lg:p-3 lg:border-2 lg:border-transparent lg:hover:easy-in-out lg:duration-500 lg:hover:border-[#594A28] lg:rounded-2xl lg:cursor-pointer hidden lg:block" href="/">Home</Link>
        </li>
        <li>
          <Link className="lg:p-3 lg:border-2 lg:border-transparent lg:hover:easy-in-out lg:duration-500 lg:hover:border-[#594A28] lg:rounded-2xl lg:cursor-pointer hidden lg:block" href="/features">Features</Link>
        </li>
        <li>
          <Link className="lg:p-3 lg:border-2 lg:border-transparent lg:hover:easy-in-out lg:duration-500 lg:hover:border-[#594A28] lg:rounded-2xl lg:cursor-pointer hidden lg:block" href="/cases">Use Cases</Link>
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
          <button className="lg:p-3 lg:text-white lg:text-xl lg:border-2 lg:rounded-2xl lg:border-[#594A28] lg:transition lg:duration-500 lg:hover:bg-cyan-500 lg:hover:scale-125 hidden lg:block">Get Started</button>
        </li>
      </ul>
      <Image
        src='/burguer-menu2.svg'
        alt="Burger Menu"
        width={40}
        height={40}
        className="lg:hidden"
      />
    </nav >
  );
}
