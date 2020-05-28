
import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = (props : any) => {


    return (
        <div className="menu">
        <div className="main-menu">
            <div className="scroll">
                <ul className="list-unstyled">
                    <li className={props.currentTab === "dashboard" ? "active" : ""}>
                        <Link to="/Dashboard">
                            <i className="simple-icon-pie-chart"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className={props.currentTab === "tasks" ? "active" : ""}>
                        <Link to="/Tasks">
                            <i className="simple-icon-layers"></i> Tasks
                        </Link>
                    </li>
                    <li>
                        <a href="#layouts">
                            <i className="simple-icon-people"></i> Traiders
                        </a>
                    </li>
                </ul>
            </div>
        </div>

         </div>
    );
};

export default Sidebar;