import React, {useContext, useEffect} from 'react'
import Sidebar from "./Sidebar";
import ArticlesHome from "./ArticlesHome";
import { Card } from "@nextui-org/react";
import ChartComponent from "./ChartComponent";
import SentimentCard from "./SentimentCard";
import SearchBar from "../Search/SearchBar";
import Dropdown from "../Dropdown/Drop";
import { JanDrishtiContext } from "../../context/Context";
import ArticleSearch from './ArticleSearch';

function DashboardHome() {
  const{Counts,search,setSearch} = useContext(JanDrishtiContext)

  useEffect(() => {
    // Invert the search state after the initial render
    setSearch(true);
  }, []);

  return (

      <div className="flex flex-col gap-10 mx-5">
        <div className="flex flex-row">
          <div className="flex-grow">
            <Dropdown />
          </div>
          <div className="flex-grow">
            <SearchBar />
          </div>
        </div>
        {/* Upper Div */}
        <div className="flex flex-row gap-3">
          <div className="flex-auto ">
           {search ? <ArticlesHome />: <ArticleSearch/>} 
          </div>
          <div className="flex flex-col">
          <div className="flex-auto ">
            <SentimentCard Title={"Positive"} ColorVariant={"success"} Count={Counts.positive} />
          </div>
          <div className="flex-auto ">
            <SentimentCard Title={"Neutral"} ColorVariant={"warning"} Count={Counts.neutral} />
          </div>
          <div className="flex-auto ">
            <SentimentCard Title={"Negative"} ColorVariant={"danger"} Count={Counts.negative}/>
          </div>
          </div>
        </div>
        <div>
          <Card className="items-center">
            <div>
              <ChartComponent />
            </div>
          </Card>
        </div> 
      </div>
  );
}

export default DashboardHome;
