import React from "react";

import "./ProjectElementRow.scss";

const ProjectElementRow = ({el}) => {
  return (
    <div className="projectElementRow">
        <div className="projectElementRow__logo">
          <div className="projectElementRow__logo--title">{el.key}</div>
        </div>
        <div className="projectElementRow__ceil">
         <p className="projectElementRow__ceil--title">{el.name}</p>
         <p className="projectElementRow__ceil--description">A Task Manager you can’t refuse</p>
        </div>
        <div className="projectElementRow__ceil">
         <p className="projectElementRow__ceil--title uppercase">{el.pub_date}</p>
         <p className="projectElementRow__ceil--description">Creation Date</p>
        </div>
        <div className="projectElementRow__ceil">
         <p className="projectElementRow__ceil--title">Oleksii Moshura</p>
         <p className="projectElementRow__ceil--description">Project lead</p>
        </div>
        <div className="projectElementRow__ceil">
         <p className="projectElementRow__ceil--title">{el.id}</p>
         <p className="projectElementRow__ceil--description">Total tasks</p>
        </div>
        <div className="projectElementRow__ceil">
         <p className="projectElementRow__ceil--title">4</p>
         <p className="projectElementRow__ceil--description">Developers</p>
        </div>
        </div>
        

  );
};

export default ProjectElementRow;
