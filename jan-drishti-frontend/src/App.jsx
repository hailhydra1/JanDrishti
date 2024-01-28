import React, {useContext} from "react";
import Login from "./components/Login";
import { Context, JanDrishtiContext } from "./context/Context";
import Logout from "./components/Logout";
import NavbarComponent from "./components/NavbarComponent";
import Dashboard from "./components/Dashboard";
import {BrowserRouter, useNavigate, Route, Routes} from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import ArticlesHome from "./components/Dashboard/ArticlesHome";
import Chatbot from "./components/Dashboard/Chatbot/Chatbot";
import Landing from "./components/Landing";
import './App.css';

function App() {
  const navigate = useNavigate();

  const {defaultTheme, userLogin} = useContext(JanDrishtiContext)
  return (
    <div className={(!defaultTheme ? "light" : "dark " ) + "text-foreground bg-background font-inter w-full h-screen"}>
    <NextUIProvider navigate={navigate}>
      {/* {userLogin ? <Dashboard /> : <Landing />} */}
      <Routes>
      {/* <NavbarComponen t /> */}
      {/* {userLogin ? <Logout /> : <Login />} */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Landing />} />
      <Route path="/chat-bot" element={<Chatbot />} />
      <Route path="/articleshome" element={<ArticlesHome />} />
      {/* <Route path="/searchresults" element={<SearchResults />} />
      <Route path="/dropresults" element={<DropResults />} /> */}
    </Routes>
    </NextUIProvider>
    </div>
  );
}

export default App;
