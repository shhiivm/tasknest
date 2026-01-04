import React, { useState } from "react";
import { Input } from "../../components/common/Input";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";
import { useAuth } from "../../context/AuthContext";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const { setUser } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage("Fields can't be empty");
      return;
    }
    try {
      const response = await api.post("/api/v1/auth/login", {
        email,
        password,
      });
      const me = await api.get("/api/v1/auth/me");
      setUser(me.data.user);
      setMessage(response.data.message);
      console.log("Login success:", response.data);
      navigate("/tasks");
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Server Error";
      setMessage(errorMsg);
      console.error("Login error:", error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-black font-zoho text-[29px] leading-[40px] max-w-[360px] mx-auto">
          Sign In
        </h1>
        <h1> to access TaskNest</h1>
        <div className=" rounded w-[360px] h-auto bg-gray-100">
          <div className="p-2 m-2">
            <div className="grid grid-cols-1 justify-items-center ">
              <Input
                type="email"
                value={email}
                placeholder={"Email"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                value={password}
                placeholder={"Password"}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 justify-items-center">
              <p>{message}</p>
              <button
                className="bg-blue-500 w-70 rounded py-2 text-white font-bold hover:bg-blue-600 cursor-pointer"
                onClick={handleLogin}
              >
                {" "}
                Sign in to your account{" "}
              </button>
            </div>
            <div className="justify-items-center">
              <p>
                Don’t have an account?{" "}
                <Link className="cursor-pointer text-blue-500" to="/register">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
