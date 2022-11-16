import React from "react";
//Підключення стилів
import "./Project.scss";
import ProjectElement from "../ProjectElement/ProjectElement";

const Project = () => {
  //Повинен бути лише 1 корневий елемент
  return (
    <div className="project">
      <h2>Recent updates</h2>
      <div className="project__row">
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
      </div>
      <h2>All projects</h2>
      <div className="project__column">
        {/* <ProjectElementRow /> */}
      </div>

    </div>
  );
};

export default Project;
