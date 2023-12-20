import react from "react";
import "./Header1.css";

const Header1 = () => {
  return (
    <>
     <nav className="navbar">
      <div className="main-div">
      <a className="laundryLogo" href="#">
            LAUNDRY
      </a>
      <ul>
          <li>
            <a className="nav-home navbar-li" href="#">Home</a>
          </li>
          <li>
            <a className="nav-pricing navbar-li" href="#">Pricing</a>
          </li>
          <li>
            <a className="nav-career navbar-li" href="#">Career</a>
          </li>
          <li>
            <a className="nav-signin " href="#">Sign In</a>
          </li>
      </ul>
      </div>
     </nav>
     
    </>
  );
};

export default Header1;

