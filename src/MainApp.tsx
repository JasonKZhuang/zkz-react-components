import React from "react";
import Present from "./components/general/Present";
import logo from "./logo.svg";
import "./MainApp.css";

function MainApp() {
  return (
    <div className="MainApp">
      <p>this is Main page</p>
      <Present />
    </div>
  );
}

export default MainApp;
