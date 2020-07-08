import React from "react";

import { Task } from "../../../../types";

const TaskCard = (props: any) => {
  const task = props.task as Task;
  return (
    <div className="col-xs-6 col-lg-3 col-12 mb-4">
      <div className="card">
        <div className="position-relative">
          <img className="card-img-top" src={task.ImagePath} alt="" />
          <span className="badge badge-pill badge-theme-1 position-absolute badge-top-left">
            Category
          </span>
        </div>
        <div className="card-body">
          <h3>{task.Title}</h3>
          <p className="list-item-heading mb-4">{task.Description}</p>
          <footer>
            <p className="text-muted text-small mb-0 font-weight-light">
              {task.CreationDate}
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
