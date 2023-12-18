import React, { useContext, useState } from "react";
import axios from "axios";
import { useUserContext } from "../Context/UseContext";
import { SignInProps } from "../../models/Interface";

const LogIn: React.FC<SignInProps> = ({ setOpenSignIn }) => {
  const { setLoggedInUser } = useUserContext();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const signInUser = async () => {
    const user = {
      email: email,
      password: password,
    };
    console.log(user);

    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/login",
        user
      );

      console.log("Log In successfully", response.data);

      const loggedUser = response.data;
      setLoggedInUser(loggedUser);
      if (loggedUser) {
        setOpenSignIn(false);
        // setShowService(true);
      }
    } catch (error: any) {
      console.log(
        "Error during sign in",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="bg-[#2864a8] bg-opacity-5 ">
      <div className="h-[100vh] w-[100vw] overflow-hidden">
        <div className=" text-center  text-black mt-32 h-[400px] w-[400px] mx-auto rounded-lg bg-white drop-shadow-md">
          <button
            className="flex text-[25px] font-medium justify-end float-right mr-3"
            onClick={() => setOpenSignIn(false)}
          >
            x
          </button>
          <div className="pt-20">
            <h2 className="text-[23px] font-semibold pt-10">Sign In</h2>
            <div className="text-center flex border-2 mt-5 bg-white border-[#42424255] bg-[#29292988] backdrop:bg-[#e4e4e7] rounded-lg w-[350px] text-[13px] font-semibold mx-auto">
              <label
                className="text-[20px] mx-2"
                id="email-label"
                aria-labelledby="email-label"
              >
                Email:
              </label>
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
                type="password"
                value={password}
                onChange={handleChange}
                placeholder="password"
                className="p-2 outline-none"
              />
            </div>
          </div>
          <button
            onClick={signInUser}
            className="text-center border-2 mt-5 bg-white border-[#42424255] bg-[#29292988] backdrop:bg-[#e4e4e7] rounded-lg h-10 w-[150px] mx-2 text-[13px] font-semibold"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
