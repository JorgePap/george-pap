import "./App.css";
import { HashRouter } from "react-router-dom";
import { Routing } from "@router";
import { Navbar } from "@ui";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const language = localStorage.getItem("language") ?? "";
  document.getElementsByTagName("html")[0].setAttribute("lang", language);

  const { darkMode, toggleTheme } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <HashRouter>
        <div className="bg-neutral-1 dark:bg-dark-1 text-[dark-1] dark:text-light-1 transition-colors duration-200">
          <Navbar toogleTheme={toggleTheme} darkMode={darkMode} />
          <Routing />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
