import Card from "./Card";
import Heading from "./Heading";
import React from "react";
import "../app/style/project.css";

const data = [
  {
    id: 0,
    title: "Countdown Timer",
    desc: "A React & Typescript based app for managing and organizing the Time",
    img: "/count-down-project.png",
    tags: ["React", "Node.Js", "CSS", "Typescript"],
  },
  {
    id: 1,
    title: "HTML & CSS Project 1",
    desc: "A HTML & CSS based Project",
    img: "/project-01.jpg",
    tags: ["HTML", "CSS"],
  },
  {
    id: 2,
    title: "HTML & CSS Project 2",
    desc: "A HTML & CSS based Project",
    img: "/Html &Css project 3.png",
    tags: ["HTML", "CSS"],
  },
  {
    id: 3,
    title: "PanaCloud Website",
    desc: "A HTML & CSS based Project",
    img: "/Panacloud-project.png",
    tags: ["HTML", "CSS"],
  },
  {
    id: 4,
    title: "Resume Builder",
    desc: "A HTML,CSS,Typescript based Project",
    img: "/Resume Builder.png",
    tags: ["HTML", "CSS", "TYPESCRIPT"],
  },
];
const Projects = () => {
  return (
    <div id="project" className="project-container">
      <Heading title="My Projects" />
      <div
        className="project-grid project-grid-xl project-grid-md-2 project-grid-lg-3 project-center"
        data-aos="zoom-in-up"
      >
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
