import React, { useContext } from "react";
import Sidebar from "./Dashboard/Sidebar";
import DashboardHome from "./Dashboard/DashboardHome";
import NavbarComponent from "./NavbarComponent";
import DashboardNavbar from "./Dashboard/DashboardNavbar";
import { JanDrishtiContext } from "../context/Context";
import Chatbot from "./Dashboard/Chatbot/Chatbot";

function Dashboard() {
  const {isNewsSelected} = useContext(JanDrishtiContext)
  return (
    <div className="w-full h-full flex flex-row bg-background">
        <Sidebar />
      <div className="w-full h-full">
        <DashboardNavbar />
        {isNewsSelected ? <Chatbot /> : <DashboardHome />}
      </div>
    </div>
  );
}

export default Dashboard;
