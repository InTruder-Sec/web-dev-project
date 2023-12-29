import { useEffect, useState } from "react";
import svg from "./../assets/Spinner-1s-200px.svg";
import { Button } from "./ui/button";

function Authenticate() {
  const [status, setstatus] = useState(loading);
  const query = window.location.search.substring(1);
  const token = query.split("code=")[1];

  useEffect(() => {
    if (token == undefined) {
      setstatus(failed);
    }
  }, [token]);

  useEffect(() => {
    if (token != undefined) {
      setstatus(loading);
      fetch("http://localhost:5000/api/user/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.code == 200) {
            // redirect to home page
            document.cookie = `token=${res.AccessToken}`;
            window.location.href = "/";
          } else {
            setstatus(failed);
          }
        });
    }
  }, [token]);

  return (
    <div className="flex justify-center w-full h-full items-center mt-80">
      <div>
        <img src={svg} alt="loading" />
      </div>
      <div>{status}</div>
    </div>
  );
}

const loading = () => {
  return <div>Please wait till we authenticate you!</div>;
};

const failed = () => {
  return (
    <>
      <div>
        Authentication failed!
        <br />
        <a href="/">
          <Button className="bg-slate-50 mt-1.5 text-slate-700 mx-auto">
            Go Back
          </Button>
        </a>
      </div>
    </>
  );
};

export default Authenticate;
