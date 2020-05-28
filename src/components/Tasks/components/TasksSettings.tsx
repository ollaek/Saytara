import React from "react";

const TasksSettings = () => {
  return (
    <div className="app-menu">
      <div className="p-4 h-100">
        <div className="scroll">
          <p className="text-muted text-small">Status</p>
          <ul className="list-unstyled mb-5">
            <li className="active">
              <i className="simple-icon-user-unfollow"></i>
              New Tasks
              <span className="float-right">12</span>
            </li>
            <li className="active">
              <i className="simple-icon-user-following"></i>
              Assigned Tasks
              <span className="float-right">12</span>
            </li>
            <li>
              <i className="simple-icon-hourglass"></i>
              Pending Tasks
              <span className="float-right">12</span>
            </li>
            <li>
              <i className="simple-icon-close" style={{ color: "red" }}></i>
              Rejected Tasks
              <span className="float-right">24</span>
            </li>
            <li>
              <i className="simple-icon-check" style={{ color: "green" }}></i>
              Completed Tasks
              <span className="float-right">24</span>
            </li>
          </ul>
        </div>
      </div>
      <a className="app-menu-button d-inline-block d-xl-none" href="/#">
        <i className="simple-icon-options"></i>
      </a>
    </div>
  );
};

export default TasksSettings;
