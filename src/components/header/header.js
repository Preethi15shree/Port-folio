import React from 'react';
import { Link } from 'react-scroll';
const Header  = () => {
  return (
    <div className="header">
        <div id="header__left"> 
            <h1>
                Front-End <span>Developer</span>
            </h1>
        </div>   
        <div id="header__right">
        <Link to="about" smooth={true} duration={500}>
          <h4>About Me</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
        <h4>Skills</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
       <h4>Certificates</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
        <h4>Contact</h4>
       </Link>
        <h4 id="header__rightbutton">Join with me</h4>
        </div>
   </div>
   
    
  );
}
export default Header;