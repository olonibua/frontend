import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserProps } from "../../models/Interface";

const CreateAccount: React.FC<registerUserProps> = ({
  setOpenRegister,
  setOpenSignIn,
}) => {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name == "username") {
      setUserName(value);
    }
  };

  const register = async () => {
    const user = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/register",
        user
      );
      console.log("register successfully", response.data);
      const registerUser = response.data;
      if (registerUser) {
        setOpenRegister(false);
        setOpenSignIn(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-[#2864a8] bg-opacity-5 z-[1000] ">
      <div className="h-[100vh] w-[100vw] overflow-hidden">
        <div className=" text-center  text-black mt-32 h-[400px] w-[400px] mx-auto rounded-lg bg-white drop-shadow-md">
          <button
            className="flex text-[25px] font-medium justify-end float-right mr-3"
            onClick={() => setOpenRegister(false)}
          >
            x
          </button>
          <div className="pt-20">
            <h2 className="text-[23px] font-semibold pt-10">Create Account</h2>
            <div className="text-center flex border-2 mt-5 bg-white border-[#42424255] bg-[#29292988] backdrop:bg-[#e4e4e7] rounded-lg w-[350px] text-[13px] font-semibold mx-auto">
              <label className="text-[20px] mx-2 ">Username:</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Input your username"
                className="p-2 outline-none"
              />
            </div>
            <div className="text-center flex border-2 mt-5 bg-white border-[#42424255] bg-[#29292988] backdrop:bg-[#e4e4e7] rounded-lg w-[350px] text-[13px] font-semibold mx-auto">
              <label className="text-[20px] mx-2 ">Email:</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Input your Email Address"
                className="p-2 outline-none"
              />
            </div>

            <div className="text-center flex border-2 mt-5 bg-white border-[#42424255] bg-[#29292988] backdrop:bg-[#e4e4e7] rounded-lg w-[350px] text-[13px] font-semibold mx-auto">
              <label className="text-[20px] mx-2 justify-start">
                Password:
              </label>
              <input
                name="password"
                type="text"
                value={password}
                onChange={handleChange}
                placeholder="Input your password"
                className="p-2 outline-none"
              />
            </div>
          </div>
          <button
            onClick={register}
            className="text-center border-2 mt-5 bg-white border-[#42424255] bg-[#29292988] backdrop:bg-[#e4e4e7] rounded-lg h-10 w-[150px] mx-2 text-[13px] font-semibold"
          >
            create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
