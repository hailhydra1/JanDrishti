import React, {useContext} from "react";
import Login from "./components/Login";
import { Context, JanDrishtiContext } from "./context/Context";
import Logout from "./components/Logout";
import NavbarComponent from "./components/NavbarComponent";
import Dashboard from "./components/Dashboard";
import {BrowserRouter, useNavigate, Route, Routes} from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import ArticlesHome from "./components/Dashboard/ArticlesHome";
import SearchResults from "./components/Search/SearchResults";
import DropResults from "./components/Dropdown/DropResults";

import Chatbot from "./components/Dashboard/Chatbot/Chatbot";


function App() {
  const navigate = useNavigate();

  const {defaultTheme, userLogin} = useContext(JanDrishtiContext)
  return (
    <div className={(!defaultTheme ? "light" : "dark " ) + "text-foreground bg-background font-inter w-full h-screen"}>
    <NextUIProvider navigate={navigate}>
      <Routes>
      {/* <NavbarComponent /> */}
      {/* {userLogin ? <Logout /> : <Login />} */}
      <Route path="" element={<Dashboard />} />
      <Route path="/chat-bot" element={<Chatbot />} />
      <Route path="/articleshome" element={<ArticlesHome />} />
      <Route path="/searchresults" element={<SearchResults />} />
      <Route path="/dropresults" element={<DropResults />} />
    </Routes>
    </NextUIProvider>
    </div>
  );
}

export default App;
