import React from "react";
import TopNavbar from "../../Shared/TopNavbar/TopNavbar";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Footer from "../../Shared/Footer/Footer";
import Form from "./components/Form";

const CreateTask = (props:any) => {
  return (
    <>
      <TopNavbar />
      <Sidebar currentTab="tasks_Create" />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="mb-2">
                <h1>Create Template</h1>
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
              </div>

              <div className="separator mb-5"></div>

              <Form history={props.history} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CreateTask;
