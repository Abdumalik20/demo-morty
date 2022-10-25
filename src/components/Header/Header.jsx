import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-removebg-preview.png";

function Header() {
  return (
    <div className="header">
      <div className="links">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="content">
          <Link className="link" to="/docs">
            Docs
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link_support" to="/support">
            SUPPORT US
          </Link>
        </div>
      </div>
      <h2 className="project_title">The Rick and Morty API</h2>
    </div>
  );
}

export default Header;
