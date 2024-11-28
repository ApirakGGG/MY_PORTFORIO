/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState, useEffect } from "react";

const GridScroll = () => {
  // setState เพื่อตรวจจับ Scrolls
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // ถ้า scroll เกิน 50vj ให้ Grid แยกกัน
        setIsScroll(true);
      } else {
        // ถ้า scroll น้อยกว่า 50vh ให้ Grid กลับมาติดกัน
        setIsScroll(false);
      }
    };

    // เพิ่มEventListener สำหรับscroll
    window.addEventListener("scroll", handleScroll);

    // ลบ EventListener เมื่อ component ถูก unMouse
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" bg-white min-h-screen px-10 py-5">
      {/* Grid container && set isScroll เพื่อแยกGrid เมื่อ scroll mouse*/}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-10 py-6 transition-all duration-1000 ${
          isScroll ? "translate-y-5 gap-18" : " translate-y-0 gap-2"
        } `}
        //  เมื่อ Scroll ลง Grid จะขยับห่างออกไปและเลื่อนต่ำลง (translate-y-5).
        // เมื่อ Scroll ขึ้น Grid จะกลับมาติดกันและอยู่ในตำแหน่งเดิม (translate-y-0).
      >
        {/* Grid Items */}
        <div className=" group relative min-h-[30vh] min-w-[30vh] bg-slate-200 px-5 py-4 rounded-md shadow-md transform transition-all duration-500">
          <h2 className="absolute">Language</h2> {/* Language */}
          <div className="flex items-center gap-5 mt-3 ">
            <Image src="/" alt="HTML" width={50} height={50} className="mt-9" />
            <Image src="/" alt="CSS" width={50} height={50} className="mt-9" />
            <Image src="/" alt="JS" width={50} height={50} className="mt-9" />
            {/* <Image src="" alt="" width={50} height={50} className="mt-9" /> */}
          </div>
        </div>
        <div className=" group relative min-h-[30vh] min-w-[30vh] bg-slate-200 px-5 py-4 rounded-md shadow-md transform transition-all duration-500">
          <h2 className="absolute">DataBase</h2> {/* DataBase */}
          <div className="flex items-center gap-5 mt-3 ">
            <Image
              src="/"
              alt="MySql"
              width={50}
              height={50}
              className="mt-9"
            />
            <Image
              src="/"
              alt="PortgreSql"
              width={50}
              height={50}
              className="mt-9"
            />
            <Image
              src="/"
              alt="MongoDB"
              width={50}
              height={50}
              className="mt-9"
            />
            {/* <Image src="" alt="" width={50} height={50} className="mt-9" /> */}
          </div>
        </div>
        <div className=" group relative min-h-[30vh] min-w-[30vh] bg-slate-200 px-5 py-4 rounded-md shadow-md transform transition-all duration-500">
          <h2 className="absolute">Freamwork</h2> {/* Freamwork */}
          <div className="flex items-center gap-5 mt-3 ">
            <Image
              src="/"
              alt="React"
              width={50}
              height={50}
              className="mt-9"
            />
            <Image
              src="/"
              alt="Next.js"
              width={50}
              height={50}
              className="mt-9"
            />
            {/* <Image src="" alt="" width={50} height={50} className="mt-9" />
            <Image src="" alt="" width={50} height={50} className="mt-9" /> */}
          </div>
        </div>
        <div className=" group relative min-h-[30vh] min-w-[30vh] bg-slate-200 px-5 py-4 rounded-md shadow-md transform transition-all duration-500">
          <h2 className="absolute">Personal Deatails</h2>{" "}
          {/* Personal Deatails */}
          <div className="flex items-center gap-5 mt-3 "></div>
        </div>
      </div>
    </div>
  );
};

export default GridScroll;
