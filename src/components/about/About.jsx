import "./About.css"
import headshot from '../../assets/headshot.png'


const About = () => {
  return (
    <section className="about-page">
      <img src={headshot} className="about-headshot" alt="headshot of author" />
      <div className="about-main">
        <div className="about-header">
          <h1>Robert Deckard M.Ed.</h1>
          <h2>About Me</h2>
        </div>
        <article className="about-content">
          <p>I’m a software engineering manager, educator, and coach who cares deeply about how people grow.</p>

          <p>
            For more than eight years, I’ve worked at the intersection of <strong>software engineering, teaching, and leadership</strong>,
            helping engineers at every stage of their careers build both technical skill and self-awareness. My work has spanned early-career
            programs, senior and staff engineering roles, and people management — always with a focus on clarity, feedback, and sustainable growth.
          </p>

          <hr />

          <h2>My background</h2>

          <p>
            I currently work as a <strong>Software Engineering Manager</strong>, where I’ve led and coached teams ranging from interns and apprentices
            to senior and staff engineers. I’ve managed anywhere from small teams to organizations of more than twenty people, focusing on career
            development, feedback, and creating psychologically safe environments where engineers can do their best work.
          </p>

          <p>
            Before moving into management, I spent several years as an individual contributor, progressing from software engineer through senior and
            staff roles. Along the way, I’ve designed and built full-stack, production-grade systems using technologies like Java, Spring Boot, Node.js,
            React, and cloud-native platforms. I’ve led teams through architectural decisions, CI/CD adoption, cloud deployments, and the replacement of
            costly third-party systems with internal solutions.
          </p>

          <p>
            While I enjoy building software, what’s always mattered most to me is <strong>how teams work and how people learn</strong> — which is why
            leadership and mentoring became a natural next step in my career.
          </p>

          <hr />

          <h2>Education and teaching roots</h2>

          <p>Before becoming a software engineer, I worked in education and workforce development.</p>

          <p>
            I’ve served as a classroom teacher, instructional coach, administrator, and director of education. In those roles, I led teams of educators,
            designed curriculum and professional development programs, and built systems to track progress and outcomes. I’ve worked in traditional public
            school settings as well as correctional education programs, where clarity, structure, and trust are not optional — they’re essential.
          </p>

          <p>
            Those experiences fundamentally shaped how I approach engineering leadership. Teaching taught me how to explain complex ideas clearly. Coaching
            taught me how to give feedback that people can actually hear. And administration taught me how systems, incentives, and expectations shape behavior
            — whether you’re talking about classrooms or engineering teams.
          </p>

          <hr />

          <h2>How I think about career growth</h2>

          <p>I don’t believe career growth comes from hacks, hustle, or vague advice.</p>

          <p>In my experience, engineers grow fastest when they:</p>

          <ul>
            <li>Understand what’s expected of them at their current level</li>
            <li>Learn how to ask for and interpret feedback</li>
            <li>Develop accurate self-awareness — without being overly harsh or defensive</li>
            <li>Build both technical depth <em>and</em> people skills</li>
          </ul>

          <p>
            Most frustration I see in engineering careers comes from misaligned expectations and unclear feedback loops. My goal is to help engineers think
            more clearly about where they are, what’s being asked of them, and how to close the gap intentionally.
          </p>

          <hr />

          <h2>Why I’m building this content</h2>

          <p>
            I created this site and video series as a place to share the patterns I’ve seen across years of teaching, mentoring, and managing engineers.
          </p>

          <p>
            This isn’t about telling people what they <em>should</em> do. It’s about giving them better mental models — for feedback, expectations,
            self-assessment, and growth — so they can make informed decisions about their own careers.
          </p>

          <p>
            Over time, this will also serve as a place to write, reflect, and go deeper than a video format allows.
          </p>

          <hr />

          <h2>Coaching and conversations</h2>

          <p>I’m especially interested in working with engineers who want to:</p>

          <ul>
            <li>Grow intentionally rather than reactively</li>
            <li>Navigate promotions, role expectations, or transitions</li>
            <li>Improve how they receive and use feedback</li>
            <li>Build confidence without ego</li>
          </ul>

          <p>
            For now, this site is primarily a clearinghouse for ideas and content. If you’d like to connect, ask a question, or explore coaching in the future,
            you’re welcome to reach out.
          </p>

          <hr />

          <p>
            I believe good engineering careers are built the same way good systems are built: with clear inputs, tight feedback loops, thoughtful iteration,
            and respect for the humans involved.
          </p>

          <p>That’s the lens I bring to everything I do.</p>
        </article>
      </div>
    </section>
  );
};
export default About;