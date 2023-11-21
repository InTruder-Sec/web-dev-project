import { useState } from "react";
import Login from "./components/login";
import Main from "./components/main";

function App() {
  const [isactive, setisactive] = useState<string>("hidden");

  return (
    <>
      <Login isactive={isactive} setisactive={setisactive} />
      <Main setisactive={setisactive} />
    </>
  );
}

export default App;
