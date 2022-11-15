import React from 'react';
//Підключення стилів
import './ProjectElement.scss';

const ProjectElement = () => {
  //Повинен бути лише 1 корневий елемент
  return (
    <div className="project">
      <h2 className="project__title">Zira</h2>
      <div className="project__block">
        <div className="project__row">
          <p className="project__row-text">Ongoing</p>
          <p className="project__row-text">4</p>
        </div>
        <div className="project__row">
          <p className="project__row-text">Done</p>
          <p className="project__row-text">13</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectElement;
