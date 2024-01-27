import React, {useContext} from "react";
import Login from "./components/Login";
import { Context, JanDrishtiContext } from "./context/Context";
import Logout from "./components/Logout";
import NavbarComponent from "./components/NavbarComponent";
import Dashboard from "./components/Dashboard";
import {BrowserRouter, useNavigate, Route, Routes} from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import ArticlesHome from "./components/Dashboard/ArticlesHome";

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
      <Route path="/articleshome" element={<ArticlesHome />} />
    </Routes>
    </NextUIProvider>
    </div>
  );
}

export default App;
