"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import AnimateText from "../AnimateText";

const Navbar = () => {
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
    // Start NAV //- z-50: วาง Navbar //- top-0: ตรึงที่ตำแหน่งบนสุด //- sticky: ทำให้ Navbar เลื่อนตามได้
    <div className="z-50 sticky top-0 flex justify-between md:flex items-center py-5 px-5 ">
      <div className="flex items-center md:justify-start">
        <div className="flex gap-5 ">
          <Image src="/react.gif" alt="LOGO" width={30} height={30} />

          <Link
            href="/"
            about="Portfolio"
            className="hover:shadow-transparent hover:text-gray-400 rounded-md"
          >
            {/* AnimationText */}
            <AnimateText text={"MY_PORTFOLIO"} speed={100} />
          </Link>

          <Link
            href="#"
            about="ABOUT"
            className="hover:shadow-transparent hover:text-gray-400 rounded-md"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Center NAV */}
      {/* <div className="flex items-center justify-between gap-5">
        <div className="flex justify-between items-center">
          <div className="  bg-transparent rounded-md"></div>
        </div>
      </div> */}

      {/* End NAV */}
      <div className="flex items-center justify-center md:justify-end">
        <div className="flex gap-5 bg-transparent">
          {navbarLinks.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              about="Contact"
              className="transfrom transition-transform duration-300 hover:scale-150 hover:shadow-2xl"
            >
              <nav.Icon className="w-5 h-5 hover:bg-slate-400 bg-transparent rounded-full" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
