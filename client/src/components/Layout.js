import React from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    // *TODO* What is the point of Layouts? Why not just put on top of everthing in App.js?
    <div>
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
}

export default Layout;
