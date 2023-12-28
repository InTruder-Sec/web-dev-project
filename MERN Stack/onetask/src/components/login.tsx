import axios from "axios";
import { useContext, useState } from "react";
import { setauthorization } from "../App";

type HeadProp = {
  isactive: string;
  setisactive: React.Dispatch<React.SetStateAction<string>>;
};

function Login(props: HeadProp): JSX.Element {
  const handleClick = (): void => {
    props.setisactive("hidden");
  };

  const Header = useContext(setauthorization);

  const [isvalid, setisvalid] = useState(true);

  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (): void => {
    axios
      .post("https://1task-backend.azurewebsites.net/api/user/login", userDetails)
      .then((res) => {
        Header(res.data.token);
        // Set authorization cookie
        document.cookie = `authorization=${res.data.token}`;
        handleClick();
      })
      .catch(() => {
        setisvalid(false);
      });
  };

  const handleSignup = (): void => {
    axios
      .post("https://1task-backend.azurewebsites.net/api/user/signup", userDetails)
      .then((res) => {
        console.log(res);
        handleLogin();
      })
      .catch(() => {
        setisvalid(false);
      });
  };

  return (
    <div className={props.isactive}>
      <div
        onClick={handleClick}
        className="fixed bg-slate-500 w-screen h-screen opacity-60"
      ></div>
      <div className="fixed left-0 right-0  m-auto w-96 mt-40 rounded-md bg-white text-black  px-7 py-8">
        <div className="text-center">
          <div className="head font-mono text-4xl">1-TASK</div>
          <div className="sub text-xs">One place for your tasks</div>
        </div>

        <div className="mt-7">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email:
          </label>
          <input
            className="email bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="email"
            onChange={(e) => {
              setuserDetails({ ...userDetails, email: e.target.value });
            }}
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password:
          </label>
          <input
            className="email bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setuserDetails({ ...userDetails, password: e.target.value });
            }}
          />
        </div>
        {/* Div hidden before invalid pass or email */}
        <div
          className={`${
            isvalid ? "opacity-0" : "opacity-1"
          } text-center m-2 w-100 text-sm text-red-500`}
        >
          Invalid Email or Password
        </div>
        <button
          type="submit"
          className="text-white block mt-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center bg-indigo-500 duration-300"
          onClick={() => {
            handleLogin();
          }}
        >
          Login
        </button>
        <div className="text-xs text-center mt-3">
          ----------------- OR ----------------
        </div>
        <button
          type="submit"
          className="text-white block mt-3 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center bg-indigo-500 duration-300"
          onClick={() => {
            handleSignup();
          }}
        >
          Sign-Up
        </button>
      </div>
    </div>
  );
}

export default Login;
