import {Link} from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
         <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/videos">Video Library</Link> |{" "}
                <Link to="/about">About Me</Link> |{" "}
                <Link to="/blog">Blog Posts</Link>
              </nav>
    )
}
export default NavBar;