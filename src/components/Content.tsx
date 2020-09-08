import React from "react";
import Part from "./Part";
import { CoursePart } from "../index";


const Content: React.FC<{ courseParts: CoursePart[]}> = ({ courseParts }) => {
  return (
    <>
      {courseParts.map(part => (
          <Part part={part} />
      ))}     
   </>
  )
};

export default Content;