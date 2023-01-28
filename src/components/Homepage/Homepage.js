import React from "react";
import "./Homepage.css";
import githubIcon from "../../images/githubIcon.png";
import linkedinIcon from "../../images/linkedinIcon.png";

function Homepage() {
    return (
        <div className="homepage_container">
            <div className="homepage_left">
                <p className="homepage_left_h1"><span className="red_color">Hi,</span> my name is</p>
                <p className="homepage_left_h2">Yogeshvari Surywanshi</p>
                {/* <p className="homepage_left_h3">SDE at <span className="red_color">Somewhere</span></p> */}
                <div className="left_MT">

                        <p className="homepage_left_description">Done <span className="red_color">B.Tech</span> from Rajiv Gandhi University in Information Technology. 
                        Currently I'm</p>
                        <p className="homepage_left_description">
                        aspiring and determined<span className="red_color"> Full Stack Web Developer, </span>
                        curious to explore different industry-</p>
                        <p className="homepage_left_description"> standard tech stacks & environments. Skilled in the <span className="red_color">MERN stack</span> and willing to start 
                        a </p>
                        <p className="homepage_left_description">career with an organization that provides an opportunity to improve skills and knowledge </p>
                        <p className="homepage_left_description">gained as well as to grow along with 
                        the organization’s goal.
                            </p> 
                </div>
                <div>
                    <a href="https://github.com/Yogeshvari2902" target="_blank">
                        <img src={githubIcon} alt="githubimage" />
                    </a>
                    <a href="https://www.linkedin.com/in/yogeshvari-suryawanshi" target="_blank">
                        <img src={linkedinIcon} alt="linkedinimage" />
                    </a>
                </div>
                <a href="mailto:yogeshvari2022@gmail.com">
                    <button className="homepage_left_button">Get in Touch</button>
                </a>
            </div>
            <div className="homepage_right">
                <img className="myImg" src="https://avatars.githubusercontent.com/u/111362569?s=400&u=359fe558e4e15e0ffb42d7e50c19e7739359c208&v=4" alt="GIF" />
            </div>
        </div>
    )
}

export default Homepage
