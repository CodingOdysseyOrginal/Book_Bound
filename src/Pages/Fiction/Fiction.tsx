import React from "react";
import Adventure from "./Adventure/Adventure";
import "./Fiction.css";
import Horror from "./Horror/Horror";
import Romance from "./Romance/Romance";

const CircleAnimation: React.FC = () => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="circle"></div>
      ))}
    </>
  );
};

const Fiction: React.FC = () => {
  return (
    <div className="FictionContainer">
      <div className="backgroundAnimation">
        <CircleAnimation />
      </div>
      <div className="fictionTitle">
        <h1>Enjoy our range of Fiction books!!</h1>
      </div>
      <Adventure />
      <Romance />
      <Horror />
    </div>
  );
};

export default Fiction;
