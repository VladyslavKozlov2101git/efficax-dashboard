import React from 'react';
//Підключення стилів
import './ProjectElement.scss';

const ProjectElement = ({el}) => {
  console.log(el)
  //Повинен бути лише 1 корневий елемент
  return (
    <div className="projectElem">
      <h2 className="projectElem__title">{el.nameForRecentUpdates}</h2>
      <div className="projectElem__block">
        <div className="projectElem__row">
          <p className="projectElem__row-text">Ongoing</p>
          <p className="projectElem__row-text">{el.ongoing}</p>
        </div>
        <div className="projectElem__row">
          <p className="projectElem__row-text">Done</p>
          <p className="projectElem__row-text">{el.done}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectElement;
