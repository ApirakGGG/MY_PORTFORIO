/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";

type AnimateProps = {
  text: string;
  speed?: number
}
const AnimateText: React.FC<AnimateProps> = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!text || typeof text !== "string") {
      console.error("Invalid text input: ", text);
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        // อัพเดต displayText ทีละตัวอักษร
        const currentchar = text[currentIndex];
        if (currentchar !== undefined){
          setDisplayText((prev) => prev + currentchar);
        }
        // console.log(`${currentIndex}: text`);
        currentIndex++;
      } else {
        // หยุดการทำงานเมื่อแสดงข้อความครบ
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h2 className={`text-1xl font-extrabold transition-opacity duration-700 `}>
      {/* แสดงข้อความ */}
      {displayText}
    </h2>
  );
};

export default AnimateText;
