import React, { Component } from "react";
import LeftPanel from "./leftPanel";
import RightPanel from "./rightPanel";
const Dashboard = () => {
  return (
    <main>
      <div className="index">
        <main className="flex row space-between">
          <LeftPanel />
          <RightPanel />
        </main>
      </div>
    </main>
  );
};

export default Dashboard;
