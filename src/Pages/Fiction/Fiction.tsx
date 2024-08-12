import Adventure from "./Adventure/Adventure";
import "./Fiction.css";
const Fiction = () => {
  return (
    <div className="FictionContainer">
      <div className="fictionTitle">
        <h1>Enjoy are range of Fiction books!!</h1>
      </div>
      <Adventure />
    </div>
  );
};

export default Fiction;
