import React from "react";
//Підключення стилів
import "./Project.scss";
import ProjectElement from "../ProjectElement/ProjectElement";
import ProjectElementRow from "../ProjectElementRow";

const Project = () => {
  //Повинен бути лише 1 корневий елемент
  const arrProjects = [
    {
      id: "8d98ca66-147d-42ef-805d-0c0c9a718de4",
      name: "Hello Back",
      key: "TP-2",
      pub_date: "2022-12-09T12:27:56.328820Z"
  },
   
  ];

  return (
    <div className="project">
      <h2 className="project__title uppercase">Recent updates</h2>
      <div className="project__row">
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
        <ProjectElement />
      </div>
      <h2 className="project__title uppercase">All projects </h2>
      <div className="project__column">

        {/* //Є масив об'єктів arrProjects, який прийшов з бека. У ньому є 3 елементи списка.
         Метод map перебирає кожен едемент і якщо він задовілбняю умови (у даному випадку умов у нас немає),
          то ми вертаємо (виводимо) цей елемент.
         elementSpiska ---  ЦЕ не зарезервована назва, тут можна написать і просто el / element/ project і тд


         ДОМАШНЄ ЗАВДАННЯ.  Беки вже зробили запрос на створення проектів. Попробувать
          
          */}

        {arrProjects.map(elementSpiska => (
          <ProjectElementRow />
        ))}


      </div>
    </div>
  );
};

export default Project;
