import Biographies from "./Biographies/Biographies";
import "./NonFiction.css";
import SelfHelp from "./SelfHelp/SelfHelp";

const NonFiction = () => {
  return (
    <div className="Container">
      <div className="Title">
        <h1>Enjoy our range of Non-Fiction books!!</h1>
      </div>
      <Biographies />
      <SelfHelp />
    </div>
  );
};

export default NonFiction;
