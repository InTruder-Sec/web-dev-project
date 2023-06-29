import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import logo from "./../../images/logo.png";
import { ChangeToCreateAccount, ChangeToForgotPass } from "./Main";

function Login(props) {
  // Invalid username password styles
  const displayNone = {
    display: "none",
  };
  const [invalidStyles, setinvalidStyles] = useState(displayNone);

  // Navigation
  const navigate = useNavigate();

  // Loading state
  const [loading, setloading] = useState(false);

  // Input details states
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // Verify user
  const VerifyUser = async (email, password) => {
    setloading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/users/verify?email=${email}&pass=${password}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.data.id === null) {
        setinvalidStyles({ display: "block" });
        setloading(false);
        console.log("Error");
      } else {
        navigate("./messenger");
        setloading(false);
      }
    } catch (err) {
      console.log("Error: " + err);
      setloading(false);
    }
  };

  // Render
  return (
    <>
      <div className="header">
        <img className="logo" alt="logo" src={logo}></img>
        <div className="logo--header">Login</div>
      </div>
      <div className="login--main">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            VerifyUser(email, password);
          }}
        >
          <div className="padding">
            <label className="label--input">Email: </label>
            <input
              className="input--box"
              placeholder="email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            ></input>
          </div>
          <div className="padding">
            <label className="label--input">Password: </label>
            <input
              className="input--box"
              type="password"
              required
              placeholder="********"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            ></input>
          </div>
          <div className="forgot--div">
            <div
              className="forgot"
              onClick={(e) => {
                ChangeToForgotPass(props.setRotate, props.setComponentMain);
              }}
            >
              forgot password?
            </div>
          </div>
          <div className="padding">
            <input
              type="submit"
              className="login--btn"
              value={`${loading ? "Loading..." : "Login"}`}
              disabled={loading}
            ></input>
          </div>
          <div className="invalidpass" style={invalidStyles}>
            Invalid username or password!
          </div>
        </form>
        <div className="oauth">
          <div className="oauth--icon">
            <svg
              width="45px"
              height="45px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.43200000000000005"
            >
              <g
                id="SVGRepo_bgCarrier"
                strokeWidth="0"
                transform="translate(0,0), scale(1)"
              >
                <rect
                  x="-2.4"
                  y="-2.4"
                  width="28.80"
                  height="28.80"
                  rx="14.4"
                  fill="#ffffff"
                  strokeWidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.5265 19 18.4439 16.3923 18.9291 13H13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11H20C20.5523 11 21 11.4477 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.1424 3 16.1123 3.74979 17.6578 5.00041C18.0871 5.34782 18.1535 5.97749 17.8061 6.40682C17.4587 6.83615 16.829 6.90256 16.3997 6.55515C15.1972 5.58212 13.668 5 12 5Z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </div>
          <div className="oauth--icon">
            <svg
              fill="#000000"
              width="45px"
              height="45px"
              viewBox="-576 -576 3072.00 3072.00"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="SVGRepo_bgCarrier"
                strokeWidth="0"
                transform="translate(0,0), scale(1)"
              >
                <rect
                  x="-576"
                  y="-576"
                  width="3072.00"
                  height="3072.00"
                  rx="1536"
                  fill="#ffffff"
                  strokeWidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"></path>{" "}
              </g>
            </svg>
          </div>
          <div className="oauth--icon">
            <svg
              fill="#000000"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="45px"
              height="45px"
              viewBox="-215.04 -215.04 942.08 942.08"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0">
                <rect
                  x="-215.04"
                  y="-215.04"
                  width="942.08"
                  height="942.08"
                  rx="471.04"
                  fill="#ffffff"
                  strokeWidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="7935ec95c421cee6d86eb22ecd125aef">
                  <path d="M116.504,500.219V170.654H6.975v329.564H116.504 L116.504,500.219z M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941 C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z M177.124,500.219 c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533 c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531 c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="no--account">Do not have an account?</div>
        <div>
          <input
            type="button"
            className="login--btn"
            value="Create Account"
            onClick={(e) => {
              ChangeToCreateAccount(props.setRotate, props.setComponentMain);
            }}
          ></input>
        </div>
      </div>
    </>
  );
}

export default Login;
