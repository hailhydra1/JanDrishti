import { Button, Card, CardHeader, Divider } from "@nextui-org/react";
import { Languages, LayoutDashboard, Newspaper, ScanSearch, Sparkles, Twitter } from "lucide-react";
import React from "react";



function Sidebar() {
  return (
    <div className="flex flex-col w-1/5 h-screen overflow-scroll ">
      <div className="p-5 text-left">
        <h1 className="font-semibold text-3xl ">Dashboard</h1>
        <p className="font-light text-sm">Powered by Jan Drishti</p>
      </div>
      <Divider />
      <div className="p-5">
        <Button className="text-md" color="primary" variant="ghost" startContent={<LayoutDashboard/>}>Home</Button>
      </div>
      <Divider />
      <div className="p-5">
        <p></p>
        <Button className="text-sm mb-5" color="default" variant="flat" startContent={<Sparkles/>}>Article Analysis</Button>
        <Button className="text-sm mb-5" color="default" variant="flat" startContent={<Newspaper/>}>Weekly Report</Button>
        <Button className="text-sm mb-5" color="default" variant="flat" startContent={<Languages/>}>Regional Translation</Button>
        <Button className="text-sm mb-5" color="default" variant="flat" startContent={<ScanSearch/>}>Article Scan</Button>
        <Button className="text-sm mb-5" color="default" variant="flat" startContent={<Twitter  />}>Tweets</Button>
      </div>
    </div>
  );
}

export default Sidebar;
