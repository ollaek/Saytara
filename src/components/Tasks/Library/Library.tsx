import React, { useState, useEffect } from "react";
import TopNavbar from "../../Shared/TopNavbar/TopNavbar";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Footer from "../../Shared/Footer/Footer";
import Filter from "./components/Filter";
import TasksList from "./components/TasksList";
import { useTaskState } from "../Hook";

const Library = () => {
  const { resetState } = useTaskState();
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);

  const { getTasks, tasks } = useTaskState();

  useEffect(
    () => {
      getTasks();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <TopNavbar />
      <Sidebar currentTab="tasks_Library" />
      <main>
        <div className="container-fluid">
          <div className="row app-row">
            <div className="col-12">
              <div className="mb-2">
                <h1>Library</h1>
              </div>

              <div className="mb-2">
                <div className="btn-group mb-1">
                  <button
                    className="btn btn-secondary btn-lg dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Large button
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </div>
                </div>

                <div className="top-right-button-container ">
                  <a
                    className="btn btn-outline-primary btn-lg top-right-button  mr-1"
                    href="/TaskCreate"
                    onClick={() => resetState()}
                  >
                    Create Task
                  </a>
                </div>
              </div>

              <div className="separator mb-5"></div>

              { tasks && <TasksList tasks={tasks} categoryId={categoryFilter} typeId={typeFilter} />}
            </div>
          </div>
        </div>
        <Filter
          setCategory={setCategoryFilter}
          setType={setTypeFilter}
          categoryId={categoryFilter}
          typeId={typeFilter}
        />
      </main>

      <Footer />
    </>
  );
};

export default Library;
