import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Introduce from "./Components/Introduce";
import Project from "./Components/Project/Project";

function page() {
  return (
    <>
      <Navbar /> {/*  Navbar component*/}
      <Introduce /> {/*  Introduce component*/}
      <Project /> {/*  Project component*/}
    </>
  );
}

export default page;
