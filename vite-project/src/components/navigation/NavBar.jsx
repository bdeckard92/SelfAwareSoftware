import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
         <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/videos">Video Library</Link>
                </li>
                <li>
                  <Link to="/about">About Me</Link>
                </li>
                <li>
                  <Link to="/blog">Blog Posts</Link>
                </li>
              </ul>
         </nav>
    )
}

export default NavBar;