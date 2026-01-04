import React from "react";
import { Tasks } from "./pages/tasks/Tasks";
import Register from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
export const App = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <Tasks />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};
