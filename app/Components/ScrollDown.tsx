"use client";
import React from "react";
import { RiArrowDownWideFill } from "react-icons/ri";

type ScrollProps = {
  targetRef: React.RefObject<HTMLDivElement>;
};

const ScrollDown: React.FC<ScrollProps> = ({ targetRef }) => {
  const handleScrollDown = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <div className="hover:text-blue-300 transfrom transition-transform duration-300 hover:scale-150 ">
        <button onClick={handleScrollDown}>
          <RiArrowDownWideFill size={50} />
        </button>
      </div>
    </>
  );
};

export default ScrollDown;
