"use client";
import React from "react";

type ScrollProps = {
  targetRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
};

const ScrollDownTag: React.FC<ScrollProps> = ({ targetRef ,children }) => {
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
            {children}
        </button>
      </div>
    </>
  );
};

export default ScrollDownTag;
