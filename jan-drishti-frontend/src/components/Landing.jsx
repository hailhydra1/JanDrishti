import React, { useContext } from "react";
import { JanDrishtiContext } from "../context/Context";
import NavbarComponent from "./NavbarComponent";

function Landing() {
  const { defaultTheme } = useContext(JanDrishtiContext);
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div>
        <NavbarComponent />
      </div>

      {/* Scrollable Content */}
      <div className="flex flex-col items-center justify-center overflow-y-scroll">
        {/* Page 1 */}
        <div
          className={
            "w-full h-screen flex flex-col items-center justify-center"
          }
        >
          <div>
            <h1
              className="text-warning text-9xl font-bold"
              style={{ textShadow: "0 0 30px #F7B750" }}
            >
              JAN DRISHTI
            </h1>
            <h1 className="text-3xl tracking-wider ">
              The pulse for informed governance
            </h1>
          </div>
        </div>

        {/* Page 2 */}
        <div className="w-full h-screen flex items-center justify-center">
          {/* Add content for Page 2 */}
        </div>
      </div>
    </div>
  );
}

export default Landing;
