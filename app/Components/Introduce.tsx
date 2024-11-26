/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from "react";
import ScrollDown from "./ScrollDown";

const Introduce = () => {
  const targetRef = useRef(null); // ใชเลื่นไปที่ tag target

  return (
    <>
      <div>
        <div className="flex md:justify-center items-center justify-center py-56">
          <h1 className="font-extrabold text-3xl">AAAJJJWWW</h1>
          <div className="absolute mt-36 items-center">
            <div className="flex justify-center">
              <ScrollDown targetRef={targetRef} />
            </div>
            <p> Scroll Down to Know More about AAAJJJWWW</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduce;
