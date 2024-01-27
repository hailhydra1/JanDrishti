import React from "react";
import Sidebar from "./Dashboard/Sidebar";
import DashboardHome from "./Dashboard/DashboardHome";
import NavbarComponent from "./NavbarComponent";

function Dashboard() {
  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <div className="w-full h-full">
        <DashboardHome />
        
      </div>
    </div>
  );
}

export default Dashboard;
