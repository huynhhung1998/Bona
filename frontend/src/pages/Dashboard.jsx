import { useState } from "react";
import Sidebar from "../components/ui/Sidebar";

import Home from "../components/dashboard/Home";
import CrewManagement from "../components/dashboard/CrewManagement";
import Attendance from "../components/dashboard/Attendance";
import Leave from "../components/dashboard/Leave";
import Payroll from "../components/dashboard/Payroll";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Home />;
      case "crew":
        return <CrewManagement />;
      case "attendance":
        return <Attendance />;
      case "leave":
        return <Leave />;
      case "payroll":
        return <Payroll />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen bg-cine-dark text-white">
      
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}