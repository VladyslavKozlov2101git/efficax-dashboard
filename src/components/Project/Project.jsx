import React from "react";
//Підключення стилів
import "./Project.scss";
import ProjectElement from "../ProjectElement/ProjectElement";
import ProjectElementRow from "../ProjectElementRow";

const Project = () => {
  //Повинен бути лише 1 корневий елемент
  return (
    <div className="project">
      <h2 className="project__title uppercase">Recent updates</h2>
      <div className="project__row">
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
      </div>
      <h2 className="project__title uppercase">All projects</h2>
      <div className="project__column">
        <ProjectElementRow />
        <ProjectElementRow />
        <ProjectElementRow />
        <ProjectElementRow />
      </div>

    </div>
  );
};

export default Project;
