import React, { useContext } from "react";
import { JanDrishtiContext } from "../context/Context";
import NavbarComponent from "./NavbarComponent";

function Landing() {
  const { defaultTheme } = useContext(JanDrishtiContext);

  const pageStyle = {
    backgroundColor: "hsla(0,100%,50%,1)",
    backgroundImage: `
      radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0px, transparent 50%),
      radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0px, transparent 50%),
      radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0px, transparent 50%),
      radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0px, transparent 50%),
      radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0px, transparent 50%),
      radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0px, transparent 50%),
      radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0px, transparent 50%)
    `,
  };

  return (
    <div className="flex flex-col h-screen" style={pageStyle}>
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
          <div className="fixed justify-center">
            <h1
              className="text-default text-9xl font-bold"
            >
              JAN DRISHTI
            </h1>
            <h1 className="text-3xl tracking-wider text-default ">
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
