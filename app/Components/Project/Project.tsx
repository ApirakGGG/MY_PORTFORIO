/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";

const Project = () => {
  const scrollRef = useRef<HTMLDivElement>(null); // ใช้สำหรับอ้างอิง container ที่จะทำscrollMouse
  const [isDragging, setIsDragging] = useState(false); // ติดตามสถานะการลาก
  const [startX, setStartX] = useState(0); // เก็บค่าตำแหน่ง X เริ่มต้น
  const [scrollLeft, setScrollLeft] = useState(0); // เก็บค่าการเลื่อนของ container

  // ยกเลิกการลาก
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // เริ่มการลาก
  const handleMouseDown = (e: any) => {
    if (!scrollRef.current) return; // หยุดการทำงานถ้า ref เป็น null
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  // การลากเมาส์
  const handleMouseMove = (e: any) => {
    if (!isDragging || !scrollRef.current) return; // หยุดการทำงานถ้า ref เป็น null
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1; // ระยะเลื่อน (x2 เพื่อเลื่อนเร็วขึ้น)
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const project = [
    {
      title: "EXEMPLE PROJECT", //title
      desc: "EXEMPLE PROJECT", //description
      image: "EXEMPLE PROJECT", //image
    },
    {
      title: "EXEMPLE PROJECT", //title
      desc: "EXEMPLE PROJECT", //description
      image: "EXEMPLE PROJECT", //image
    },
    {
      title: "EXEMPLE PROJECT", //title
      desc: "EXEMPLE PROJECT", //description
      image: "EXEMPLE PROJECT", //image
    },
    {
      title: "EXEMPLE PROJECT", //title
      desc: "EXEMPLE PROJECT", //description
      image: "EXEMPLE PROJECT", //image
    },
    {
      title: "EXEMPLE PROJECT", //title
      desc: "EXEMPLE PROJECT", //description
      image: "EXEMPLE PROJECT", //image
    },
  ];
  return (
    <>
      {/* Grid introduce skill */}
      <div
        className="py-32 w-full overflow-x-scroll scrollbar-hide md:flex "
        ref={scrollRef}
        onMouseDown={handleMouseDown} // เริ่มการลาก
        onMouseMove={handleMouseMove} // การลากเมาส์
        onMouseUp={handleMouseUp} // ยกเลิกการลาก
        onMouseLeave={handleMouseUp} // จบการลากเมื่อออกจาก container
      >
        <div className="flex gap-8 px-12 py-5 md:justify-center "> 
          {project.map((prj, index) => (
            <div
              key={index}
              className="min-w-[700px] min-h-[400px] flex-shrink-0 bg-gradient-to-br
               from-orange-300 to-pink-500 p-4 rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl
                 "
            >
              <img
                src={prj.image}
                alt=""
                 className="rounded-lg mb-4 object-cover h-[250px] w-full" //ใส่ object-cover ใน img เพื่อให้ภาพเต็มพื้นที่และไม่บิดเบี้ยว:
              />
              <div>
                <h3 className="text-white font-bold text-lg  hover:text-blue-500">{prj.title}</h3>
                <p className="text-white text-sm  hover:text-blue-500">{prj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
