import React from "react";

const Sidebar = (props: any) => {
  return (
    <div className="menu">
      <div className="main-menu">
        <div className="scroll">
          <ul className="list-unstyled">
            <li className={props.currentTab === "dashboard" ? "active" : ""}>
              <a href="/Dashboard">
                <i className="simple-icon-pie-chart"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li className={props.currentTab.includes("tasks") ? "active" : ""}>
              <a href="#tasks">
                <i className="simple-icon-layers"></i> Tasks
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sub-menu">
        <div className="scroll">
          <ul className="list-unstyled" data-link="tasks">
            <li
              className={props.currentTab === "tasks_Library" ? "active" : ""}
            >
              <a href="/TasksLibrary">
                <i className="iconsminds-box-with-folders"></i>{" "}
                <span className="d-inline-block">Library</span>
              </a>
            </li>
            <li className={props.currentTab === "tasks_Assign" ? "active" : ""}>
              <a href="Dashboard.Ecommerce.html">
                <i className="iconsminds-profile"></i>{" "}
                <span className="d-inline-block">Assign Task</span>
              </a>
            </li>
            <li className={props.currentTab === "tasks_Manage" ? "active" : ""}>
              <a href="Dashboard.Content.html">
                <i className="iconsminds-statistic"></i>{" "}
                <span className="d-inline-block">Task Manager</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
