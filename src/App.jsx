
import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/home/Home";
import VideoList from "./components/videoList/VideoList";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";

function App() {
  return (
    <>
     
       <NavBar/>
     
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
