import logo from "./logo.svg";
import React from "react";
import Dashboard from "./pages/dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Menubar from "./components/layout/menubar";
import Navbar from "./components/layout/navbar";

const App = () => {
  return (
    <div id="app">
      <div className="container">
        <Router>
          <Navbar />
          <Menubar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
        {/* <div class="admin-slipbar-outer">
          <div class="admin-slipbar active">
            <div class="text-center">
              <i class="icon-go"></i>
            </div>
            <div class="flex row">
              <p>
                {" "}
                总上分 <b>26152</b>
              </p>
              <p>
                {" "}
                总下分 <b>1200</b>
              </p>
              <p>
                {" "}
                积分统计 <b>25092</b>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default App;
