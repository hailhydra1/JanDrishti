import React, { useState } from "react";
import { createContext } from "react";

const JanDrishtiContext = createContext();

function Context(props) {
  const [userLogin, setUserLogin] = useState(false);
  const [defaultTheme, setTheme] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false)
  const [news,setNews] = useState([]);
  const [isNewsSelected,setNewsSelected ] = useState(false)
  const [newsURL, setNewsURL] = useState("")

  return (
    <JanDrishtiContext.Provider value={{newsURL, setNewsURL,isNewsSelected,setNewsSelected,news,setNews,userLogin, setUserLogin, defaultTheme, setTheme, userDetails, setUserDetails, loading, setLoading}}>
        {props.children}
        </JanDrishtiContext.Provider>
  );
}

export {JanDrishtiContext, Context}
