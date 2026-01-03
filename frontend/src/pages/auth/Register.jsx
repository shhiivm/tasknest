import React, { useState } from "react";
import { Input } from "../../components/common/Input";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");

  const createUser = async () => {
    if (!name || !email || !password || !confPass) {
      console.log("Invalid input");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        {
          name,
          email,
          password,
          confirmPassword: confPass,
        }
      );
      if (response.data.success) {
        console.log("Account created success");
      }
      setName("");
    } catch (error) {
      console.error("Error in fetching Api", error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-black text-center font-zoho text-[29px] leading-[40px] max-w-[360px] mx-auto mb-[30px] cursor-pointer">
          {" "}
          TaskNest{" "}
        </h1>

        <h1 className="text-black text-center font-zoho text-[29px] leading-[40px] max-w-[360px] mx-auto mb-[30px]">
          {" "}
          Managing tasks is about to get a whole lot easier
        </h1>
        <div className=" rounded w-[360px] h-auto bg-gray-100">
          <div className="p-2 m-2">
            <div className="grid grid-cols-1 justify-items-center ">
              <Input
                type="text"
                placeholder={"Name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder={"Confirm Password"}
                value={confPass}
                onChange={(e) => setConfPass(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 justify-items-center">
              <button
                className="bg-blue-500 w-70 rounded py-2 text-white font-bold hover:bg-blue-600 cursor-pointer"
                onClick={createUser}
              >
                {" "}
                Create an account{" "}
              </button>
            </div>
            <div className="justify-items-center">
              <p>
                Already have an account?{" "}
                <Link className="cursor-pointer text-blue-500" to="/login">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
