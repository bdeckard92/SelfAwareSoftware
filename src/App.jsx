
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/home/Home";
import VideoList from "./components/videoList/VideoList";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";

function App() {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
     
       <NavBar theme={theme} onToggleTheme={toggleTheme} />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideoList />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </>
  );
}

export default App;
