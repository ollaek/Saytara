import React from "react";
import TopNavbar from "../Shared/TopNavbar/TopNavbar";
import Sidebar from "../Shared/Sidebar/Sidebar";
import Footer from "../Shared/Footer/Footer";

const Dashboard = () => {
  return (
    <>
      <TopNavbar />
      <Sidebar currentTab="dashboard    "/>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1>Dashboard Content</h1>
           <div className="separator mb-5"></div>
            </div>

            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
