import { Context, useEffect, useState } from "react";
import Login from "./components/login";
import Main from "./components/main";
import { createContext } from "react";

let setauthorization: Context<React.Dispatch<React.SetStateAction<string>>>;
let authorization: Context<string>;

function App() {
  const [isactive, setisactive] = useState<string>("hidden");

  const getCookie = (): string => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
      if (cookie[0] === "authorization") {
        return cookie[1];
      }
    }
    return "";
  };

  const [Authorization, setAuthorization] = useState("");
  useEffect(() => {
    if (getCookie() !== "") {
      setAuthorization(getCookie());
    }
  }, []);

  authorization = createContext(Authorization);
  setauthorization = createContext(setAuthorization);

  return (
    <>
      <Login isactive={isactive} setisactive={setisactive} />
      <Main setisactive={setisactive} />
    </>
  );
}

export default App;
export { setauthorization, authorization };
