import React from "react";
import ProjectBox from "./ProjectBox/ProjectBox";
import "./Projects.css";
import project_img1 from "./Project_img/Project_img1.png"
import project_img2 from "./Project_img/Project_img2.png"
import project_img3 from "./Project_img/Project_img3 (2).png"

function Projects() {
  // console.log(project_img1)
  const projectsData = [
    {
      image: project_img1,
      title: "ESPNricinfo",
      sentences: [
       "ESPNcricinfo is a website which gives the details of cricket sport like cricket matches throughout the world.",
       "Deployed markup languages such as HTML to create user-friendly web page.",
       "Developed features & functionality for the front end of the website to enhance the user experience.",
       "Fixed the structure & design of the web page and established that the web design was optimized for mobile devices.",
       "Integrated and collaborated with other team members to deliver new features and fix the bugs."
      ],
      link: "https://startling-puppy-d2fbee.netlify.app/",
    },
    {
      image: project_img2,
      title: "Amazon an Ecommerce Website",
      sentences: [
        "Amazon is a famous e-commerce website where users can buy electronics, clothes, books, toys, games & many more.", 
        "Retrieved the data of the movies and web series from Heroku API, and JSON server is used in entire project.",
        "Determined the structure & design of the web page and ensured that the web design was optimized for mobile devices.",
        "Created features & functionality for the front end of the website to enhance the user experience.",
        "Integrated and collaborated with other team members to deliver new features and fix the bugs."
      ],
      link: "https://clever-beignet-5d917d.netlify.app/",
    },
    {
      image: project_img3,
      title: "Lenskart Website",
      sentences: [
        "Lenskart is an Indian eyewear online portal where user can buy glasses, contact lenses & sunglasses.",
        "For making this clone we used some UI & libraries like HTML, CSS, JavaScript, React & ChakraUI.",
        "Designed all the features & functionalities for the front end of the website to enhance the user experience.",
        "Integrated and collaborated with other team members to deliver new features and fix the bugs."
      ],
      link: "https://lenskart-clone.netlify.app/",
    },
  ];

  return (
    <div id="projects">
      <p className="projects_title">Projects</p>
      <div className="projects_box_container">
        {projectsData.map((value, key) => (
          <ProjectBox
            title={value.title}
            image={value.image}
            sentences={value.sentences}
            link={value.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
