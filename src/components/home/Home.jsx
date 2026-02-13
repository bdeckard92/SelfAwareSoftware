import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
    <section className="home-hero">
      <a href="https://youtu.be/vVGseqGSU8Y" target="_blank" rel="noreferrer">
        <img src={logo} className="home-logo" alt="Self Aware Logo" />
      </a>
      <div className="home-content">
        <h1>The Self Aware Software Engineer</h1>
        <h3>Practical Guidance on feedback, expectations, and career growth.</h3>
        <div className="home-actions">
          <Link className="home-action-link" to="/videos">
            <button type="button">Get Started with Video Content</button>
          </Link>
          <Link className="home-action-link" to="/blog">
            <button type="button">Read the Companion Blog</button>
          </Link>
          <Link className="home-action-link" to="/about">
            <button type="button">Find Out More About Me</button>
          </Link>
        </div>
      </div>
    </section>
    )
}
export default Home;