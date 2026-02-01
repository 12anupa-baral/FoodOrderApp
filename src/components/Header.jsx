import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo_container">
        <img width="150px" src={ LOGO_URL } />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Header