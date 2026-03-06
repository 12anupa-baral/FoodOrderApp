import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import style from "./style.module.scss";
// let btnName = logout;
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const handleToggle = () => {
    if (btnName == "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };
  return (
    <div className={style.header}>
      <img width="150px" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login" onClick={() => handleToggle()}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
