import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import QuoteScroller from '../quoteScroller/QuoteScroller'
import './Home.css'

const Home = () => {
    return (
    <>
      <section className="home-hero">
        <a href="https://www.youtube.com/@bobdeckard8341" target="_blank" rel="noreferrer">
          <img src={logo} className="home-logo" alt="Self Aware Logo" />
        </a>
        <div className="home-content">
          <h1>The Self Aware Software Engineer</h1>
          <h3>Practical Guidance on feedback, expectations, and career growth.</h3>
          <div className="home-actions">
            <Link className="home-action-link" to="/videos">
              <button type="button" data-tooltip="Watch Bob explain things with words and hand gestures (videos!)">
                Get Started with Video Content
              </button>
            </Link>
            <Link className="home-action-link" to="/blog">
              <button type="button" data-tooltip="Articles about software engineering (surprisingly coherent!)">
                Read the Companion Blog
              </button>
            </Link>
            <Link className="home-action-link" to="/about">
              <button type="button" data-tooltip="Peek at Bob's origin story and why he yells about code">
                Find Out More About Me
              </button>
            </Link>
          </div>
        </div>
      </section>
      <QuoteScroller />
    </>
    )
}
export default Home;