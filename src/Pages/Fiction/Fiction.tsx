import React from "react";
import Adventure from "./Adventure/Adventure";
import Horror from "./Horror/Horror";
import Romance from "./Romance/Romance";
import ScienceFiction from "./ScienceFiction/ScienceFiction";

const Fiction: React.FC = () => {
  return (
    <div className="Container">
      <div className="Title">
        <h1>Enjoy our range of Fiction books!!</h1>
      </div>
      <Adventure />
      <Romance />
      <Horror />
      <ScienceFiction />
    </div>
  );
};

export default Fiction;
