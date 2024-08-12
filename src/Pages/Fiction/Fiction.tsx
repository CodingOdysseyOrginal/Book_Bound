import Adventure from "./Adventure/Adventure";
import "./Fiction.css";
import Horror from "./Horror/Horror";
import Romance from "./Romance/Romance";
const Fiction = () => {
  return (
    <div className="FictionContainer">
      <div className="fictionTitle">
        <h1>Enjoy are range of Fiction books!!</h1>
      </div>
      <Adventure />
      <Romance />
      <Horror />
    </div>
  );
};

export default Fiction;
