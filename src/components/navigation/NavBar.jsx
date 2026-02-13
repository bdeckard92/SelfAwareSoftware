import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = ({ theme = 'light', onToggleTheme = () => {} }) => {
    return (
         <nav className = 'navbar'>
              <ul className = 'nav-inner'>
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
                <li>
                  <button
                    className="theme-toggle"
                    type="button"
                    onClick={onToggleTheme}
                    aria-pressed={theme === 'dark'}
                    aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                  >
                    {theme === 'dark' ? 'Go Towards the Light' : 'Come to the Dark Side'}
                  </button>
                </li>
              </ul>
         </nav>
    )
}

export default NavBar;