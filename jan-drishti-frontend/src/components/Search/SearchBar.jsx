import React,{useContext, useState} from "react";
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";
import { JanDrishtiContext } from "../../context/Context";
import {  useNavigate } from "react-router-dom";
import axios from "axios";

export default function App() {
    const api_key = "54ab9e22d09a4d03b77f3af1e64e33ba"
    const [value, setValue] = React.useState("");
    const{setNews,search,setSearch} = useContext(JanDrishtiContext)
    const navigate = useNavigate()

    

    const handleKeyDown = async(event) => {
        if (event.key === "Enter") {
          // Call your function here
          try {
            const list= await axios.get(`https://newsapi.org/v2/everything?q=${value}&apiKey=${api_key}`); 
            // console.log(list.data.articles);
            setNews(list.data.articles);
            setSearch(false)
            // navigate("/SearchResults");
          } catch (error) {
            console.log(error);
          }
        }
      };
    
  return (
    <div className=" px-8 rounded-2xl flex justify-center items-center text-white shadow-lg gap-2">
      <Input
        placeholder="Search"
        value={value}
        onValueChange={setValue}
        onKeyDown={handleKeyDown}
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
 
        startContent={
          <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 mr-2" />
        }
      />
    </div>
  );
}
