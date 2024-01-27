import React from "react";
import Sidebar from "./Sidebar";
import ArticlesHome from "./ArticlesHome";
import { Card } from "@nextui-org/react";
import ChartComponent from "./ChartComponent";
import SentimentCard from "./SentimentCard";
import SearchBar from "../Search/SearchBar";
import Dropdown from "../Dropdown/Drop";

function DashboardHome() {
  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col gap-10">
        <div className="flex flex-row">
          <div className="flex-grow">
            <Dropdown />
          </div>
          <div className="flex-grow">
            <SearchBar />
          </div>
        </div>
        {/* Upper Div */}
        <div className="flex flex-row gap-5">
          <ArticlesHome />
          <SentimentCard />
        </div>
        <div>
          <Card className="items-center">
            <div>
              <ChartComponent />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
