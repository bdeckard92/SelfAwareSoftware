import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/">Home</Link>
        <Link to="/videos">Video Library</Link>
        <Link to="/about">About Me</Link>
        <Link to="/blog">Blog Posts</Link>
      </div>
    </nav>
  )
}

export default NavBar;