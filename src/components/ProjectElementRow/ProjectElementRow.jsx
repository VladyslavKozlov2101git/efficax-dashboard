import React from "react";

import "./ProjectElementRow.scss";

const ProjectElementRow = () => {
  return (
    <div className="projectElementRow">
        <div className="projectElementRow__logo">
          <div className="projectElementRow__logo--title">ZIRA</div>
        </div>
        <div className="projectElementRow__ceil">
         <p className="projectElementRow__ceil--title">Zira Board</p>
         <p className="projectElementRow__ceil--description">A Task Manager you can’t refuse</p>
        </div>
        <div className="projectElementRow__ceil">
         <p className="projectElementRow__ceil--title uppercase">Friday, Sep 2, 2022</p>
         <p className="projectElementRow__ceil--description">Creation Date</p>
        </div>
        <div className="projectElementRow__ceil">
         <p className="projectElementRow__ceil--title">Oleksii Moshura</p>
         <p className="projectElementRow__ceil--description">Project lead</p>
        </div>
        <div className="projectElementRow__ceil">
         <p className="projectElementRow__ceil--title">203</p>
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
