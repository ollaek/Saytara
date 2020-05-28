import React from "react";
import TopNavbar from "../Shared/TopNavbar/TopNavbar";
import Sidebar from "../Shared/Sidebar/Sidebar";
import Footer from "../Shared/Footer/Footer";
import TaskCard from "./components/TaskCard";
import CreateTaskModal from "./components/CreateTaskModal";

const Tasks = () => {
  return (
    <>
      <TopNavbar />
      <Sidebar currentTab="tasks" />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="mb-2">
                <h1>Tasks</h1>
                <div className="top-right-button-container">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-lg top-right-button  mr-1"
                    data-toggle="modal"
                    data-backdrop="static"
                    data-target="#exampleModal"
                  >
                    ADD NEW
                  </button>
                  <CreateTaskModal />
              
                </div>
              </div>

              <div className="mb-2">
                
              
              </div>

              <div className="separator mb-5"></div>

              <div className="row mb-4">
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
};

export default Tasks;
