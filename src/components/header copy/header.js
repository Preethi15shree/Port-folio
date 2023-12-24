import React from 'react';
import {link} from "react-scroll"

const Header  = () => {
  return (
    <div className="header">
        <div id="header__left"> 
            <h1>
                Front-End <span>Developer</span>
            </h1>
        </div>   
        <div id="header__right">
        <a to="about" smooth={true} duration={500}>
        <h4>About</h4>
        </a>
        <a to="skills" smooth={"true"} duration={"500"}>
        <h4>Skills</h4>
        </a>
        <a to="projects" smooth={"true"} duration={"500"}>
       <h4>Projects</h4>
        </a>
        <a to="Experiance" smooth={"true"} duration={"500"}>
        <h4>Experiance</h4>
        </a>
        <a to="contact" smooth={"true"} duration={"500"}>
        <h4>Contact</h4>
       </a>
        <h4 id="header__rightbutton">Join with me</h4>
        </div>
   </div>
   
    
  );
}
export default Header;