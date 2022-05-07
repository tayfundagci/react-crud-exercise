import React from "react";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
