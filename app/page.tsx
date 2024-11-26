import React from "react";
import Introduce from "./Components/Introduce";
import Project from "./Components/Project/Project";

function page() {
  return (
    <>
      <Introduce /> {/*  Introduce component*/}
      <Project /> {/*  Project component*/}
    </>
  );
}

export default page;
