import React from 'react';
import '../../styles/Projects.css';
import project1 from "../../components/assets/project1.png";
import gardenProud from "../../components/assets/garden proud.png";
import weather2 from"../../components/assets/weather2.png";
// import DayPlanner from "../../components/assets/Plan1.png";
const projects = [
  {
    name: "VINFormation",
    image: project1,
    alt: "VINFormation App",
    desc: "VINformation is a web application used to search a vehicle by inputting a VIN number and receiving information about it",
    tech: "HTML, CSS, JavaScript,  Third party APIs",
    App: "https://clabel95.github.io/Project-1/",
    Repo: "https://github.com/sahanamai/Project-1",
  },
  {
    name: "garden proud",
    image: gardenProud,
    alt: "garden proud",
    desc: "The user can create a profile and login.The plant can be browsed by seasons . when the user click the plant it directs user to the plant details page where the user can save plants to my garden user profile page.",
    tech: "HTML, CSS (Bulma), JavaScript, SQL, node.JS",
    App: "https://garden-proud-2022.herokuapp.com/",
    Repo: "https://github.com/sahanamai/garden-proud",
  },
  {
    name: "Weather Dashboard",
    image: weather2,
    alt: "Weather Dashboard App",
    desc: "A simple weather dashboard to display current weather of different cities including temperature, UV Index, wind speedand five day weather forecasts.",
    tech: "HTML, CSS, JQuery, Bootstrap, Moment.js, Open Weather - API",
    App: "https://sahanamai.github.io/weather-dashboard/",
    Repo: " https://github.com/sahanamai/weather-dashboard",
  },
  // {
  //   name: "Day Planner",
  //   image: DayPlanner,
  //   alt: "Day Planner App",
  //   desc: "The planner that allows the user to store tasks & agendas for a busy business day.",
  //   tech: "HTML, CSS, JQuery, Bootstrap, Moment.js",
  //   App: "",
  //   Repo: "",
  // },
];

export default function Work() {
  return (
    <div className="Work">
      <h1>Portfolio</h1>
      <div className="project-container">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <h2 className="project-name">{project.name}</h2>
            <p>{project.desc}<br></br>
            {project.tech}</p>
            <img
              className="project-img"
              src={project.image}
              alt={project.alt}
            />
          <h6>            
            <a href={project.App} target="_blank" rel="noreferrer"> Application</a> ||
            <a href={project.Repo} target="_blank" rel="noreferrer"> Repository</a>
          </h6>
          </div>))}
          </div></div>
  );
}
