import React from "react";
import "./ProjectBox.css";

function ProjectBox({ image, title, sentences, link }) {
  console.log(sentences);
  return (
    <div className="project_box_container">
      <div className="project_box_image_container">
        <img height="300px" src={image} />
        {/* <iframe width="500px" height="400px" src="https://clever-beignet-5d917d.netlify.app/"></iframe> */}
      </div>
      <div className="project_box_description_container">
        <p className="project_box_title">{title}</p>
        <div className="project_box_sentences_container">
          {sentences.map((value, key) => (
            <p>{value}</p>
          ))}
        </div>
        <p className="project_box_link">
            <span>Link</span> 
            - <a href={link} target="_blank">{link}</a>
        </p>
      </div>
    </div>
  );
}

export default ProjectBox;
