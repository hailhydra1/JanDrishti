import React, { useState,useEffect } from "react";
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
  const [search, setSearch] = useState(false)

  const [Counts, setCounts] = useState({
    positive: 0,
    neutral: 0,
    negative: 0,
  });

  useEffect(() => {
    calculateCounts();
  },[news])


  const calculateCounts = () => {
    const counts = { positive: 0, negative: 0, neutral: 0 };

    // Map through newsList and update sentiment counts
    news.forEach((news) => {
      const sentiment = getSentiment(news.result);
      counts[sentiment]++;
    });

    // Update the state with the new counts
    setCounts(counts);
  };

  const getSentiment = (result) => {
    // You may need to adjust this based on your actual result format
    if (result=="Sentiment: Positive") {
      return 'positive';
    } else if (result=="Sentiment: Neutral") {
      return 'neutral';
    } else {
      return 'negative';
    }
  };

  console.log(Counts)

  return (
    <JanDrishtiContext.Provider value={{search,setSearch,Counts,setCounts,newsURL, setNewsURL,isNewsSelected,setNewsSelected,news,setNews,userLogin, setUserLogin, defaultTheme, setTheme, userDetails, setUserDetails, loading, setLoading}}>
        {props.children}
    </JanDrishtiContext.Provider>
  );
}

export {JanDrishtiContext, Context}
