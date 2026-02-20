import { data } from "react-router-dom";

const blogList = [
  {
    episode: 1,
    dateCreated: "2026-02-05",
    title: "Three Questions to get better feedback as a Software Engineer.",
    body: (
      <article>
        <header>
          <h1>Asking for Better Feedback as a Software Engineer</h1>
        </header>

        <p>
          Most software engineers don’t struggle because they can’t write code.
        </p>

        <p>
          They struggle because the feedback they get is vague, delayed, or hard
          to act on.
        </p>

        <p>
          Comments like <em>“you’re doing fine”</em>,{" "}
          <em>“be more proactive”</em>, or
          <em>“just keep doing what you’re doing”</em> don’t give you much to
          work with — especially if you’re trying to grow intentionally in your
          career.
        </p>

        <p>
          In the first episode of this series, I talk about a simple but
          effective way to get{" "}
          <strong>clearer, more actionable feedback</strong> from peers and
          managers.
        </p>

        <p>This post captures the core idea.</p>

        <hr />

        <h2>Why feedback often fails</h2>

        <p>
          Most feedback problems aren’t about bad intent. They usually come
          from:
        </p>

        <ul>
          <li>People wanting to avoid conflict</li>
          <li>Lack of time or observation</li>
          <li>Unclear expectations</li>
          <li>Feedback being given too late to be useful</li>
        </ul>

        <p>
          When you ask an open-ended question like{" "}
          <em>“Do you have any feedback for me?”</em>, you’re putting all the
          cognitive load on the other person. The result is often generic or
          overly safe feedback.
        </p>

        <p>
          If you want better feedback, you need to{" "}
          <strong>ask better questions</strong>.
        </p>

        <hr />

        <h2>A simple framework: three questions</h2>

        <p>
          Instead of asking for feedback in general, try asking these three
          questions:
        </p>

        <ol>
          <li>
            <strong>What am I doing well?</strong>
          </li>
          <li>
            <strong>What could I do more of?</strong>
          </li>
          <li>
            <strong>What should I stop doing?</strong>
          </li>
        </ol>

        <p>These questions work because they are:</p>

        <ul>
          <li>Specific without being confrontational</li>
          <li>Balanced (strengths and gaps)</li>
          <li>Focused on behavior, not personality</li>
        </ul>

        <p>
          They also make it much easier for the other person to respond
          honestly.
        </p>

        <hr />

        <h2>How to use the questions effectively</h2>

        <p>
          The questions themselves matter — but <em>how</em> you ask them
          matters just as much.
        </p>

        <h3>Anchor them to a concrete moment</h3>

        <p>Feedback is most useful when it’s tied to something specific.</p>

        <p>For example:</p>

        <ul>
          <li>After a project</li>
          <li>After a design review</li>
          <li>After a sprint or release</li>
        </ul>

        <p>Instead of asking in the abstract, you might say:</p>

        <blockquote>
          <p>
            “After that design review, what’s something I did well, something I
            could do more of, and something I should stop doing?”
          </p>
        </blockquote>

        <hr />

        <h3>Ask in a 1:1 setting</h3>

        <p>
          People are far more candid in private than in group settings. A 1:1
          conversation signals that you’re genuinely open to feedback, not
          performing receptiveness.
        </p>

        <hr />

        <h3>Listen without defending</h3>

        <p>This is the hardest part.</p>

        <p>
          If you argue with the feedback, explain it away, or immediately
          justify your choices, you teach the other person that giving you
          feedback is risky.
        </p>

        <p>
          You don’t have to agree with every piece of feedback — but you{" "}
          <em>do</em> need to fully hear it before evaluating it.
        </p>

        <hr />

        <h2>Why this matters for career growth</h2>

        <p>Career growth depends on feedback loops.</p>

        <p>
          If your feedback loop is vague or delayed, growth slows down — even if
          you’re working hard.
        </p>

        <p>By asking more intentional questions, you:</p>

        <ul>
          <li>Reduce ambiguity</li>
          <li>Surface expectations earlier</li>
          <li>Show maturity and self-awareness</li>
          <li>Make it easier for managers and peers to help you grow</li>
        </ul>

        <p>
          Over time, this leads to clearer conversations about scope, impact,
          and readiness for the next level.
        </p>

        <hr />

        <h2>A small challenge</h2>

        <p>
          This week, ask <strong>one person you trust</strong> these three
          questions:
        </p>

        <ul>
          <li>What am I doing well?</li>
          <li>What could I do more of?</li>
          <li>What should I stop doing?</li>
        </ul>

        <p>Write down what you hear. Don’t debate it. Look for patterns.</p>

        <p>That reflection is where growth starts.</p>

        <hr />

        <p>
          In the next episode, I break down how expectations change across
          software engineering levels — and why understanding those expectations
          makes feedback far more useful.
        </p>

        <p>
          If you want to grow intentionally, learning how to ask for — and
          process — feedback is one of the highest-leverage skills you can
          build.
        </p>
      </article>
    ),
  },
  {
    episode: 2,
    dateCreated: "2026-02-12",
    title: "Understanding Expectations for Software Engineer levels",
    body: (
      <article>
        <header>
           <h1>Know what's expected at each level</h1>
        </header>
       
        <p>
          One of the most common sources of frustration in a software
          engineering career isn’t lack of skill.
        </p>

        <p>
          It’s <strong>unclear expectations</strong>.
        </p>

        <p>
          Engineers often feel like they’re doing the right work but receiving
          confusing feedback, getting passed over for promotion, or being told
          they’re “not quite there yet” without a clear explanation of why. In
          many cases, the problem isn’t performance — it’s misalignment between{" "}
          <em>how an engineer sees their role</em> and{" "}
          <em>how that role is being evaluated</em>.
        </p>

        <p>
          This post builds on the first episode about asking for better feedback
          and focuses on a related question:
        </p>

        <blockquote>
          <p>
            <em>
              What are you actually expected to optimize for at each level of
              software engineering?
            </em>
          </p>
        </blockquote>

        <hr />

        <h2>Expectations aren’t precise — they’re fuzzy</h2>

        <p>
          We often talk about engineering levels as if they’re crisp, clearly
          defined checklists.
        </p>

        <p>
          In reality, they’re closer to{" "}
          <strong>distributions than single points</strong>.
        </p>

        <p>
          A useful mental model is to think of levels like{" "}
          <strong>box-and-whisker plots</strong>:
        </p>

        <ul>
          <li>There’s a range of expectations at each level</li>
          <li>There’s overlap between adjacent levels</li>
          <li>People often operate in the “whiskers,” not the median</li>
        </ul>

        <p>That overlap is where most confusion — and growth — happens.</p>

        <p>
          Being in the overlap doesn’t mean you’re failing. It usually means
          you’re stretching into the next set of expectations while still being
          evaluated on your current role.
        </p>

        <p>
          Understanding that fuzziness is the first step toward better
          self-awareness and more productive feedback conversations.
        </p>

        <hr />

        <h2>Level-by-level expectations</h2>

        <p>
          Rather than treating levels as exhaustive job descriptions, it’s more
          helpful to understand the{" "}
          <strong>primary expectation each level is optimizing for</strong>.
        </p>

        <p>
          Below is a simplified, pattern-based view that holds across many
          organizations.
        </p>

        <hr />

        <h3>Entry-Level Software Engineer</h3>

        <p>
          <strong>Primary focus:</strong> Learning and execution
        </p>

        <p>
          At this level, the expectation is not independence or architectural
          leadership. It’s about building a foundation.
        </p>

        <p>Feedback tends to focus on:</p>
        <ul>
          <li>Writing correct, maintainable code</li>
          <li>Learning tools, systems, and workflows</li>
          <li>Asking questions early and clearly</li>
        </ul>

        <p>
          <strong>Self-awareness check:</strong>
        </p>
        <blockquote>
          <p>
            <em>
              Do I recognize gaps in my understanding and ask for help before
              they become problems?
            </em>
          </p>
        </blockquote>

        <hr />

        <h3>Software Engineer II</h3>

        <p>
          <strong>Primary focus:</strong> Ownership
        </p>

        <p>
          Mid-level engineers are expected to take responsibility for their work
          end-to-end.
        </p>

        <p>Feedback often centers on:</p>
        <ul>
          <li>Reliability and follow-through</li>
          <li>Communicating progress and risks</li>
          <li>Delivering features without constant oversight</li>
        </ul>

        <p>
          <strong>Self-awareness check:</strong>
        </p>
        <blockquote>
          <p>
            <em>Can my team trust me to own and deliver work independently?</em>
          </p>
        </blockquote>

        <hr />

        <h3>Senior Software Engineer</h3>

        <p>
          <strong>Primary focus:</strong> Leverage
        </p>

        <p>
          Senior engineers are evaluated less on how much code they write and
          more on the impact of their decisions.
        </p>

        <p>Feedback usually touches on:</p>
        <ul>
          <li>Design quality and tradeoffs</li>
          <li>Reducing future work for the team</li>
          <li>Mentoring and influencing others</li>
        </ul>

        <p>
          <strong>Self-awareness check:</strong>
        </p>
        <blockquote>
          <p>
            <em>
              Am I multiplying the effectiveness of the team, or just completing
              my own tickets?
            </em>
          </p>
        </blockquote>

        <hr />

        <h3>Staff Software Engineer</h3>

        <p>
          <strong>Primary focus:</strong> Direction
        </p>

        <p>
          Staff engineers operate in ambiguity and help teams move forward when
          the path isn’t clear.
        </p>

        <p>Feedback often focuses on:</p>
        <ul>
          <li>Creating clarity across teams</li>
          <li>Aligning technical decisions with business needs</li>
          <li>Leading without formal authority</li>
        </ul>

        <p>
          <strong>Self-awareness check:</strong>
        </p>
        <blockquote>
          <p>
            <em>
              Do people come to me when problems are unclear or cross team
              boundaries?
            </em>
          </p>
        </blockquote>

        <hr />

        <h3>Engineering Manager</h3>

        <p>
          <strong>Primary focus:</strong> Outcomes through others
        </p>

        <p>
          Engineering managers are no longer evaluated on personal output. Their
          effectiveness is reflected in their team.
        </p>

        <p>Feedback typically emphasizes:</p>
        <ul>
          <li>Team growth and engagement</li>
          <li>Quality of decisions and prioritization</li>
          <li>Coaching, feedback, and communication</li>
        </ul>

        <p>
          <strong>Self-awareness check:</strong>
        </p>
        <blockquote>
          <p>
            <em>
              Is the team stronger and more effective because of how I lead?
            </em>
          </p>
        </blockquote>

        <hr />

        <h2>Why expectations and feedback are tightly connected</h2>

        <p>
          Feedback often feels vague or unfair when you don’t know which
          expectations you’re being evaluated against.
        </p>

        <p>For example:</p>
        <ul>
          <li>
            A senior engineer asking, <em>“How’s my code?”</em> may be asking a
            lower-level question than their role demands.
          </li>
          <li>
            A mid-level engineer being told to “think bigger” may actually be
            receiving feedback about ownership or impact.
          </li>
        </ul>

        <p>
          Self-awareness means understanding the <strong>context</strong> of
          feedback before reacting to it.
        </p>

        <p>When you know what your role is optimizing for, you can:</p>
        <ul>
          <li>Ask more precise feedback questions</li>
          <li>Interpret feedback more accurately</li>
          <li>Decide intentionally what to work on next</li>
        </ul>

        <hr />

        <h2>A simple reflection exercise</h2>

        <p>To make this practical, try writing down the following:</p>

        <ol>
          <li>The level you believe you’re currently operating at</li>
          <li>The level you believe you’re being evaluated at</li>
          <li>One expectation gap between those two</li>
        </ol>

        <p>That gap is often where the most valuable growth work lives.</p>

        <hr />

        <h2>Closing thought</h2>

        <p>Career growth isn’t about perfectly matching a checklist.</p>

        <p>
          It’s about understanding expectations, developing accurate
          self-awareness, and using feedback as a signal rather than a judgment.
        </p>

        <p>
          In the next episode, I’ll go deeper into mindfulness, self-assessment,
          and how to process feedback without being overly harsh or defensive —
          a critical skill if you want to grow sustainably over time.
        </p>
      </article>
    ),
  },
  {
    epsiode: 3,
    dateCreated: "2026-02-17",
    title: "How to Recieve Improvement Feedback as a Software Engineer",
    body: (
     
  
     
          <article>
            <header>
              <h1>
               
                (Without Getting Defensive)
              </h1>
              <p>Most software engineers say they want feedback.</p>
              <p>Until they actually get it.</p>
              <p>
                Improvement feedback can feel personal — especially in technical
                roles where we take pride in our work. Even when the intent is
                growth, the initial reaction is often defensive. Your heart rate
                rises. You begin mentally replaying events. You start building a
                counterargument before the other person finishes speaking.
              </p>
              <p>That reaction is normal.</p>
              <p>
                But how you handle the next few minutes can have an outsized
                impact on your career.
              </p>
              <p>
                Over time, I’ve simplified how I try to receive improvement
                feedback into three steps:
              </p>
              <p>
                <strong>Be Thankful. Be Thoughtful. Be Purposeful.</strong>
              </p>
              <p>Simple. Not always easy. But simple.</p>
            </header>

            <section>
              <h2>Be Thankful</h2>
              <p>
                When someone gives you improvement feedback, they are taking a
                risk.
              </p>
              <ul>
                <li>They may worry about conflict.</li>
                <li>They may worry about damaging the relationship.</li>
                <li>They may worry about how you’ll react.</li>
              </ul>
              <p>
                The first step is to say: <em>“Thank you.”</em>
              </p>
              <p>
                Not because you agree. Not because it feels good. But because
                gratitude keeps the feedback loop open.
              </p>
              <p>
                You can appreciate the input without agreeing with the
                conclusion.
              </p>
              <p>
                If people feel punished for giving you feedback, they will stop
                giving it. And silent teammates are far more dangerous than
                uncomfortable conversations.
              </p>
              <p>Gratitude isn’t submission. It’s signal preservation.</p>
            </section>

            <section>
              <h2>Be Thoughtful</h2>
              <p>
                This is where the real work happens — and it starts internally.
              </p>
              <p>Before responding outwardly, pause.</p>
              <p>
                Notice your reaction. Are you defensive? Are you hurt? Are you
                mentally preparing a rebuttal?
              </p>
              <p>Defensiveness is automatic. Curiosity is intentional.</p>
              <p>
                Instead of immediately asking for proof or examples, start with
                an internal question:
              </p>
              <blockquote>
                <p>
                  <em>
                    What have I done that could reasonably lead someone to this
                    conclusion?
                  </em>
                </p>
              </blockquote>
              <p>That word “reasonably” matters.</p>
              <p>
                You’re not assuming the feedback is fully correct. You’re
                assuming there may be data you haven’t fully seen.
              </p>
              <p>Ask yourself:</p>
              <ul>
                <li>Can I think of even one example?</li>
                <li>Have I heard something adjacent before?</li>
                <li>Is there a pattern here?</li>
              </ul>
              <p>
                Sometimes feedback is poorly phrased. Sometimes it’s incomplete.
                Sometimes it’s only partially accurate.
              </p>
              <p>But even partial truth is useful.</p>
              <p>
                Your job isn’t to defend your intent. Your job is to examine
                your impact.
              </p>
              <p>
                Even if the feedback is 20% accurate, that 20% might be the most
                valuable part.
              </p>
              <p>Extract signal before responding.</p>
            </section>

            <section>
              <h2>Be Purposeful</h2>
              <p>Once you’ve paused and reflected, now you respond.</p>
              <p>And here’s the key question:</p>
              <blockquote>
                <p>
                  <em>
                    What is my purpose right now — to understand, or to defend?
                  </em>
                </p>
              </blockquote>
              <p>Those are very different conversations.</p>
              <p>
                If your purpose is to understand, your tone shifts. Instead of
                pushing back immediately, you might say:
              </p>
              <blockquote>
                <p>
                  “I’d like to understand that better. Can you walk me through
                  what you observed?”
                </p>
              </blockquote>
              <p>That’s not agreement. It’s clarity.</p>
              <p>Being purposeful means:</p>
              <ul>
                <li>You’re not reacting emotionally.</li>
                <li>You’re not trying to win.</li>
                <li>You’re trying to learn.</li>
              </ul>
              <p>
                You can still disagree. You can still add context. But you do it
                from a position of calm reflection rather than reflex.
              </p>
              <p>
                Purpose shapes tone. Tone shapes trust. Trust determines whether
                people continue investing in your growth.
              </p>
            </section>

            <section>
              <h2>Why This Matters for Software Engineers</h2>
              <p>Technical skill alone doesn’t determine career progression.</p>
              <p>
                Engineers who grow fastest aren’t the ones who never receive
                critical feedback. They’re the ones who know how to process it
                well.
              </p>
              <p>
                Improvement feedback is not a verdict on your competence. It’s
                data about your impact.
              </p>
              <p>If you can:</p>
              <ul>
                <li>Protect the feedback loop</li>
                <li>Extract signal from imperfect delivery</li>
                <li>Respond with intention rather than instinct</li>
              </ul>
              <p>You gain an advantage that compounds over time.</p>
            </section>

            <section>
              <h2>A Simple Practice</h2>
              <p>The next time you receive improvement feedback, try this:</p>
              <ol>
                <li>Say thank you.</li>
                <li>Write the feedback down.</li>
                <li>Wait 24 hours.</li>
                <li>
                  Revisit it and ask yourself:
                  <em>What part of this is useful for me to work on?</em>
                </li>
              </ol>
              <p>
                Growth often lives in the pause between reaction and response.
              </p>
            </section>

            <footer>
              <p>
                If you found this helpful, consider subscribing to the YouTube
                channel for more practical guidance on career growth in software
                engineering.
              </p>
            </footer>
          </article>
     
    
    ),
  },
];

export default blogList;
