import React, { useState } from "react";
import { createContext } from "react";

const JanDrishtiContext = createContext();

function Context(props) {
  const [userLogin, setUserLogin] = useState(false);
  const [defaultTheme, setTheme] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false)

  return (
    <JanDrishtiContext.Provider value={{userLogin, setUserLogin, defaultTheme, setTheme, userDetails, setUserDetails, loading, setLoading}}>
        {props.children}
        </JanDrishtiContext.Provider>
  );
}

export {JanDrishtiContext, Context}
