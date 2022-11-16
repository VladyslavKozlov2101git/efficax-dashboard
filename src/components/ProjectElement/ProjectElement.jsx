import React from 'react';
//Підключення стилів
import './ProjectElement.scss';

const ProjectElement = () => {
  //Повинен бути лише 1 корневий елемент
  return (
    <div className="projectElem">
      <h2 className="projectElem__title">Zira</h2>
      <div className="projectElem__block">
        <div className="projectElem__row">
          <p className="projectElem__row-text">Ongoing</p>
          <p className="projectElem__row-text">4</p>
        </div>
        <div className="projectElem__row">
          <p className="projectElem__row-text">Done</p>
          <p className="projectElem__row-text">13</p>
        </div>
      </div>
    </div>
    
  );
};

export default ProjectElement;
