import React from "react";
import "./TechStack.css";
import json from "../../images/techStack/JSON.jpg";
import cpp from "../../images/techStack/c&c++.png";
import firebase from "../../images/techStack/firebase.png";
import github from "../../images/techStack/github.png";
import html from "../../images/techStack/html.png";
import css from "../../images/techStack/css.png";
import js from "../../images/techStack/js.png";
import react from "../../images/techStack/react.png";
import redux from "../../images/techStack/redux.png";
import ajax from "../../images/techStack/Ajax.png";
import chakraui from "../../images/techStack/CHAKRAUI.jpg";
import materialui from "../../images/techStack/MATERIAL UI.png";
import bootstrap from "../../images/techStack/bootstrap-logo.png";
import dsa from "../../images/techStack/DSA.png";
import java from "../../images/techStack/JAVA.webp";
import sql from "../../images/techStack/sql.png"
import vscode from "../../images/techStack/vs.png"
import postman from "../../images/techStack/postman.webp"
import TechStackIconContainer from "./TechStackIconContainer/TechStackIconContainer";

function TechStack() {
  const techstackData = [
    {
      iconName: "React",
      iconImage: react,
      iconAltPropery: "reactImage",
    },
    {
      iconName: "Redux",
      iconImage: redux,
      iconAltPropery: "reduxImage",
    },
    {
      iconName: "Javascript",
      iconImage: js,
      iconAltPropery: "jsImage",
    },
    {
      iconName: "HTML",
      iconImage: html,
      iconAltPropery: "htmlImage",
    },
    {
      iconName: "CSS",
      iconImage: css,
      iconAltPropery: "ajaxImage",
    },
    {
      iconName: "BootStrap",
      iconImage: bootstrap,
      iconAltPropery: "bootStrapImage",
    },

  ];

  const techstackData2 = [
    {
      iconName: "ChakraUI",
      iconImage: chakraui,
      iconAltPropery: "chakraImage",
    },
    // {
    //   iconName: "MaterialUI",
    //   iconImage: materialui,
    //   iconAltPropery: "materialImage",
    // },
    {
      iconName: "Ajax",
      iconImage: ajax,
      iconAltPropery: "ajaxImage",
    },
    // {
    //   iconName: "Firebase",
    //   iconImage: firebase,
    //   iconAltPropery: "firebaseImage",
    // },
    {
      iconName: "DSA",
      iconImage: dsa,
      iconAltPropery: "DSAImage",
    },
    {
      iconName: "JAVA",
      iconImage: java,
      iconAltPropery: "javaImage",
    },
    {
      iconName: "SQL",
      iconImage: sql,
      iconAltPropery: "sqlImage",
    },
   
 
  ];
  const techstackData3 = [
    {
      iconName: "C & C++",
      iconImage: cpp,
      iconAltPropery: "cppImage",
    },
    {
      iconName: "Github",
      iconImage: github,
      iconAltPropery: "githubImage",
    },
    {
      iconName: "Postman",
      iconImage: postman,
      iconAltPropery: "postmanImage",
    },
    {
      iconName: "VScode",
      iconImage: vscode,
      iconAltPropery: "vsImage",
    },
    {
      iconName: "JSON",
      iconImage: json,
      iconAltPropery: "jsonImage",
    },

  ];

  return (
    <div id="tools" className="techstack_container">
      <p className="techstack_title">Tech Stack</p>
      <div className="techstack_icon_container">
        {techstackData.map((value, key) => {
          return (
            <TechStackIconContainer
              image={value.iconImage}
              altProperty={value.iconAltPropery}
              name={value.iconName}
            />
          );
        })}
      </div>
      <div className="techstack_icon_container">
        {techstackData2.map((value, key) => (
          <TechStackIconContainer 
            image={value.iconImage}
            altProperty={value.iconAltPropery}
            name={value.iconName}
          />
        ))}
      </div>
      <div className="techstack_icon_container">
        {techstackData3.map((value, key) => {
          return (
            <TechStackIconContainer
              image={value.iconImage}
              altProperty={value.iconAltPropery}
              name={value.iconName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TechStack;
