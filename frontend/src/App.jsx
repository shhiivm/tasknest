import React from "react";
import { Tasks } from "./services/Tasks";
import Register from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/common/Navbar";
export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
