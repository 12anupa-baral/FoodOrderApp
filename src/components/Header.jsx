import { LOGO_URL } from "../utils/constants";
import style from "./style.module.scss";
const Header = () => {
  return (
    <div className={style.header}>
      <img width="150px" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header