import React from "react";

import "./ProjectElementRow.scss";

const ProjectElementRow = () => {
  return (
    <div className="projectElemRow">
        <div className="projectElemRow__logo">
          <div className="projectElemRow__logo--title">ZIRA</div>
        </div>

        <div className="projectElemRow__name">
          <div className="projectElemRow__name--text">Zira Board</div>
          <div className="projectElemRow__name--text">A Task Manager you can’t refuse</div>
        </div>

        <div className="projectElemRow__date">
          <div className="projectElemRow__date--text">Friday, Sep 2, 2022</div>
          <div className="projectElemRow__date--text">Creation Date</div>
        </div>


        <div className="projectElemRow__pl">
        <div className="projectElemRow__pl--text">Oleksii Moshura</div>
        <div className="projectElemRow__pl--text">Project lead</div>
        </div>

        <div className="projectElemRow__total">
        <div className="projectElemRow__pl--total">203</div>
        <div className="projectElemRow__pl--total">Total tasks</div>
        </div>

        <div className="projectElemRow__developers">
          <div className="projectElemRow__pl--developers">4</div>
          <div className="projectElemRow__pl--developers">Developers</div>
        </div>
      </div>
  );
};

export default ProjectElementRow;
