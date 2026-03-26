import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = ({ theme = 'light', onToggleTheme = () => {} }) => {
    return (
         <nav className = 'navbar'>
              <ul className = 'nav-inner'>
                <li>
                  <Link to="/" data-tooltip="Back to the beginning of your journey">Home</Link>
                </li>
                <li>
                  <Link to="/videos" data-tooltip="Watch Bob explain things with words and hand gestures (videos!)">Video Library</Link>
                </li>
                <li>
                  <Link to="/about" data-tooltip="Peek at Bob's origin story and why he yells about code">About Me</Link>
                </li>
                <li>
                  <Link to="/blog" data-tooltip="Articles about software engineering (surprisingly coherent!)">Blog Posts</Link>
                </li>
                <li>
                  <Link to="/assessment" data-tooltip="Find out your engineering level (for fun and self-reflection only!)">Level Check</Link>
                </li>
                <li>
                  <button
                    className="theme-toggle"
                    type="button"
                    onClick={onToggleTheme}
                    data-tooltip={theme === 'dark' ? 'Escape the void and seek the light' : 'Join the dark side (it has cookies!)'}
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