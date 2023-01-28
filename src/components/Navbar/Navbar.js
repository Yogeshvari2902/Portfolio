import React from "react";
import "./Navbar.css";

function Navbar() {
  var name = "<YS />";

  return (
    <div className="navbar_container">
        <div className="navbar_left">{name}</div>
        <div className="navbar_right">
          <a>About</a>
          <a href="#tools">Tools</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="https://drive.google.com/file/d/1iDQE_OtCW025GJtOfhhDqgDNF2DVo8JC/view?usp=sharing">Resume</a>
        </div>
    </div>
  );
}

export default Navbar;
