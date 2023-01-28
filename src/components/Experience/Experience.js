import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import cpp from "../../images/techStack/cpp.png";
import firebase from "../../images/techStack/firebase.png";
import github from "../../images/techStack/github.png";
import html from "../../images/techStack/html.png";
import js from "../../images/techStack/js.png";
import react from "../../images/techStack/react.png";
import css from "../../images/techStack/css.png";

function Experience() {
  const statements = [
   "1. Practical Coding  800+  Hours Practical Coding",
    
    "2. Data Structures & Algorithms 200 Hours Data Structures   & Algorithms",
    
    "3. Soft Skill Development 80+ Hours Soft Skill Development",
    
    "4. Math & Logic 100+ Hours Math & Logic",
    
    "5. Mini Projects 60 Mini Projects",
    
    "6. Projects & Hackathons 8+ Projects & Hackathons"
  ];
  const iconImages = [react, js, html, css];

  return (
    <div id="experience" className="experience_container">
      <p className="experience_title">Experience</p>
      <div className="experience_cards_container">
        {/* <ExperienceCard
          companyName="Lakshmi Chitfund Pvt Ltd"
          designation="SDE"
          statements={statements}
          iconImages={iconImages}
        />
        <ExperienceCard
          companyName="Lakshmi Chitfund Pvt Ltd"
          designation="SDE"
          statements={statements}
          iconImages={iconImages}
        /> */}
        <ExperienceCard
          companyName="Masai School"
          // designation="SDE"
          statements={statements}
          iconImages={iconImages}
        />
      </div>
    </div>
  );
}

export default Experience;
