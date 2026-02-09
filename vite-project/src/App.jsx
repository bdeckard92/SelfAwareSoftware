import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./components/home/Home";
import VideoList from "./components/videoList/VideoList";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/videos">Video Library</Link> |{" "}
        <Link to="/about">About Me</Link> |{" "}
        <Link to="/blog">Blog Posts</Link>
      </nav>
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
