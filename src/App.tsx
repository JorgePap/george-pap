import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "@router";
import { Navbar } from "@ui";
import { useState } from "react";

function App() {
  const basename =
    import.meta.env.BASE_URL === "development" ? "/" : "/george-pap/";
  const language = localStorage.getItem("language") ?? "";
  document.getElementsByTagName("html")[0].setAttribute("lang", language);
  const [darkMode, setDarkMode] = useState(true);

  const toogleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <BrowserRouter basename={basename}>
        <div className="bg-neutral-1 dark:bg-dark-1 text-[dark-1] dark:text-light-1 transition-colors duration-200">
          <Navbar toogleTheme={toogleTheme} darkMode={darkMode} />
          <Routing />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;