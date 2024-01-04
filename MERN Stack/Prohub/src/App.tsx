import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import { createContext, useEffect, useState } from "react";
import { Toaster } from "./components/ui/toaster";

let globalToken;

function App() {
  const [token, settoken] = useState("");
  const getToken = getCookie("token");
  useEffect(() => {
    settoken(getToken);
  }, [getToken]);
  globalToken = createContext(token);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length == 2) return parts.pop()?.split(";").shift();
};

export default App;
export { globalToken };
