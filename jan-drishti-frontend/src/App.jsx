import React, {useContext} from "react";
import Login from "./components/Login";
import { Context, JanDrishtiContext } from "./context/Context";
import Logout from "./components/Logout";
import NavbarComponent from "./components/NavbarComponent";
import Dashboard from "./components/Dashboard";


function App() {

  const {defaultTheme, userLogin} = useContext(JanDrishtiContext)
  return (
    <div className={(!defaultTheme ? "light" : "dark " ) + "text-foreground bg-background font-inter w-full h-screen"}>
      {/* <NavbarComponent /> */}
      {/* {userLogin ? <Logout /> : <Login />} */}
      <Dashboard />
    </div>
  );
}

export default App;
