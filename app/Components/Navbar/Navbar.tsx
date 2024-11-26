"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import AnimateText from "../AnimateText";

function Navbar() {
  const navbarLinks = [
    {
      Icon: FaFacebook,
      href: "https://www.facebook.com/apirak.jansawang",
      current: true,
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/_aaaaajsw/",
      current: true,
    },
    {
      Icon: FaGithub,
      href: "https://github.com/ApirakGGG",
      current: true,
    },
  ];

  return (
    // Start NAV
    <div className="sticky flex justify-between md:flex items-center py-5 px-5 bg-gray-900 text-white">
      <div className="flex items-center md:justify-start">
        <div className="flex gap-5 ">
          <Image src="/react.gif" alt="LOGO" width={30} height={30} />
          <Link href="/" about="HOME" className="hover:bg-slate-400 rounded-md">
            Portfolio
          </Link>
          <Link
            href="/contact"
            about="ABOUT"
            className="hover:bg-slate-400 rounded-md"
          >
            Concact
          </Link>
        </div>
      </div>

      {/* Center NAV */}
      <div className="flex items-center justify-between gap-5">
        <div className="flex justify-between items-center">
          <div className="  bg-transparent rounded-md">
            <Link href="/" about="Portfolio">
              {/* AnimationText */}
              <AnimateText text={"MY_PORTFOLIO"} speed={100} />
            </Link>
          </div>
        </div>
      </div>

      {/* End NAV */}
      <div className="flex items-center justify-center md:justify-end">
        <div className="flex gap-5 bg-transparent">
          {navbarLinks.map((nav) => (
            <Link key={nav.href} href={nav.href} about="Contact" className="transfrom transition-transform duration-300 hover:scale-150 hover:shadow-2xl">
              <nav.Icon className="w-5 h-5 hover:bg-slate-400 bg-transparent rounded-full" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
