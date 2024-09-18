import "./Navbar.css";
import React, {useState} from "react";
import { Link } from "react-scroll";


const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-nav">
      <div className="nav-bar">
        <h2>
          <Link to="home" smooth={true} duration={500}>Sricharitha</Link>
        </h2>
{/* Hamburger Icon for small screens */}
        <div className="hamburger" onClick={handleToggle}>
          &#9776;
        </div>

        <nav className={`nav-flex ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li>
            <Link to="project" smooth={true} duration={500}>Projects</Link>
            </li>
            <li>
            <Link to="resume" smooth={true} duration={500}>Resume</Link>
            </li>
          </ul>
        </nav>
        
      </div>
      
    </div>
  );
};

export default Nav;
