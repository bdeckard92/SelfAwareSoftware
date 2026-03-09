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
  {episode: 4,
    dateCreated: "2026-02-24",
    title: "From Feedback to Action:",
    body: (<article>
    <header>
      <h1>Setting SMART Goals as a Software Engineer</h1>
      <p>
        Most software engineers say they want to grow.
      </p>
      <p>
        They want to improve their system design skills.
        They want to communicate better.
        They want to operate at a senior level.
        They want to get promoted.
      </p>
      <p>
        But vague goals produce vague progress.
      </p>
      <p>
        If you’ve ever received meaningful feedback and then struggled to translate it into action, you’re not alone.
        Feedback gives you direction. What most engineers lack is a clear way to turn that direction into measurable growth.
      </p>
      <p>
        That’s where SMART goals can help — if they’re applied correctly.
      </p>
    </header>

    <section>
      <h2>SMART Is a Structure — Not the Goal Itself</h2>
      <p>
        SMART stands for:
      </p>
      <ul>
        <li><strong>Specific</strong></li>
        <li><strong>Measurable</strong></li>
        <li><strong>Achievable</strong></li>
        <li><strong>Relevant</strong></li>
        <li><strong>Time-bound</strong></li>
      </ul>
      <p>
        Most people have heard this before. The problem isn’t knowing the acronym.
        The problem is applying it to behaviors that actually drive career growth.
      </p>
      <p>
        Just because a goal checks the SMART boxes doesn’t mean it’s a good goal.
      </p>
      <p>
        For example:
      </p>
      <blockquote>
        <p>
          “Over the next four weeks, I will close 15 Jira tickets per sprint to increase productivity.”
        </p>
      </blockquote>
      <p>
        This is technically SMART. It’s specific. It’s measurable. It’s time-bound.
        But it may not align with the level you’re trying to grow into.
      </p>
      <p>
        More output doesn’t automatically mean more impact.
      </p>
      <p>
        If you’re trying to operate at a senior level, optimizing for ticket velocity may reinforce junior-level behavior.
      </p>
      <p>
        SMART is a framework. Alignment determines quality.
      </p>
    </section>

    <section>
      <h2>Turning Feedback Into Action</h2>
      <p>
        The key is to connect your SMART goal directly to the feedback you’ve received and the expectations of the level you’re growing toward.
      </p>
      <p>
        Let’s look at three examples.
      </p>
    </section>

    <section>
      <h2>Example 1: Improving Communication</h2>
      <p><strong>Feedback:</strong> “You need to communicate more clearly in meetings.”</p>
      <p><strong>Vague goal:</strong> “I want to improve my communication.”</p>
      <p><strong>Stronger SMART goal:</strong></p>
      <blockquote>
        <p>
          “Over the next six weeks, in every sprint demo I lead, I will summarize tradeoffs and risks at the end of my presentation,
          and I will ask my manager for feedback on clarity after at least two of those demos.”
        </p>
      </blockquote>
      <p>
        Now we have a clear behavior, a measurable feedback loop, a defined timeframe, and alignment with senior-level expectations.
        That’s not just activity. That’s deliberate practice.
      </p>
    </section>

    <section>
      <h2>Example 2: Growing in System Design</h2>
      <p><strong>Feedback:</strong> “You need to strengthen your system design skills.”</p>
      <p><strong>Vague goal:</strong> “Get better at system design.”</p>
      <p><strong>Stronger SMART goal:</strong></p>
      <blockquote>
        <p>
          “Over the next quarter, I will proactively draft one design proposal for an upcoming feature,
          request written feedback from at least one senior or staff engineer, and document the tradeoffs I considered.”
        </p>
      </blockquote>
      <p>
        This goal builds design clarity, exposure to senior-level thinking, explicit feedback, and documented reasoning.
        You’re practicing the behavior of senior engineers — not waiting for the title.
      </p>
    </section>

    <section>
      <h2>Example 3: Increasing Team Leverage</h2>
      <p><strong>Feedback:</strong> “You need to have more impact beyond your own work.”</p>
      <p><strong>Vague goal:</strong> “Be more impactful.”</p>
      <p><strong>Stronger SMART goal:</strong></p>
      <blockquote>
        <p>
          “For the next eight weeks, I will mentor one junior engineer during code reviews by leaving at least two explanatory comments per review,
          and I will ask them whether the feedback was clear and helpful.”
        </p>
      </blockquote>
      <p>
        This creates measurable leverage — not busyness, not volume. Leverage.
      </p>
    </section>

    <section>
      <h2>The Three Most Common Goal-Setting Mistakes</h2>
      <ol>
        <li>
          <strong>Outcome-only goals</strong><br />
          “I want to get promoted.” Promotion is not a behavior.
        </li>
        <li>
          <strong>Identity-based goals</strong><br />
          “I want to be more strategic.” Strategy shows up in decisions, tradeoffs, and communication.
        </li>
        <li>
          <strong>No feedback loop</strong><br />
          If you never measure or revisit your goal, it disappears.
        </li>
      </ol>
      <p>
        Growth requires observable behavior and feedback.
      </p>
    </section>

    <section>
      <h2>A Simple Template You Can Use</h2>
      <p>
        If you’re not sure how to structure your next growth experiment, try this:
      </p>
      <blockquote>
        <p>
          Over the next ___ weeks, I will practice ___ behavior, measure it by ___, because it aligns with ___ expectation.
        </p>
      </blockquote>
      <p>
        Example:
      </p>
      <blockquote>
        <p>
          Over the next eight weeks, I will lead two cross-team technical discussions and ask for feedback on how clearly I framed tradeoffs,
          because staff-level expectations include influencing across teams.
        </p>
      </blockquote>
      <p>
        That’s clear. That’s measurable. That’s aligned.
      </p>
    </section>

    <section>
      <h2>Growth Is Iterative</h2>
      <p>
        You don’t need ten goals. You need one or two deliberate growth experiments at a time.
      </p>
      <p>
        Run them for six to eight weeks. Measure. Reflect. Adjust.
      </p>
      <p>
        Engineering careers don’t stall because of lack of effort. They stall because of lack of specificity.
      </p>
      <p>
        Turn feedback into behavior. Turn behavior into measurable practice. Turn practice into progress.
      </p>
    </section>

    <footer>
      <p>
        If you found this helpful, you can watch the full episode on setting SMART goals for software engineers on my YouTube channel,
        where I walk through these examples in more detail.
      </p>
    </footer>
  </article>)
  },
  {episode: 5,
    dateCreated: '2026-03-05',
    title: "How to Give Feedback:",
    body: ( <article>
    <header>
      <h1>That Actually Helps as a Software Engineer</h1>
      <p>
        Most engineers do not struggle with noticing problems.
      </p>
      <p>
        We notice unclear design docs. We notice risky shortcuts. We notice when
        priorities feel confusing or when communication is not landing well.
      </p>
      <p>
        The hard part is not seeing the issue.
      </p>
      <p>
        The hard part is saying something in a way that actually helps.
      </p>
      <p>
        Poorly delivered feedback creates defensiveness. Well-delivered feedback
        creates improvement.
      </p>
      <p>
        And when the goal is helping someone grow, even critical feedback can be
        a form of kindness.
      </p>
      <p>
        Avoiding feedback may feel polite in the moment, but it often leaves
        people stuck. Thoughtful feedback helps people improve.
      </p>
      <p>
        In software engineering, that matters a lot.
      </p>
    </header>

    <section>
      <h2>The Core Pattern</h2>
      <p>
        Whether you are giving feedback to a peer, to someone who reports to
        you, or upward to your manager, the same basic pattern applies.
      </p>
      <p>Good feedback is:</p>
      <ul>
        <li>Specific</li>
        <li>Focused on behavior or work</li>
        <li>Future-oriented</li>
      </ul>
      <p>
        It should help someone understand what happened, why it mattered, and
        what they can do differently next time.
      </p>
    </section>

    <section>
      <h2>Peer-to-Peer Feedback</h2>
      <p>
        Peer feedback is one of the most common forms of feedback engineers give.
      </p>
      <p>
        It might happen in a code review, in a design discussion, or in the way
        a teammate communicates during a project.
      </p>
      <p>
        The first mindset to bring into peer feedback is this:
        <strong>assume positive intent.</strong>
      </p>
      <p>
        Most engineers are not being careless on purpose. They may be moving
        quickly, juggling priorities, or optimizing for something different than
        you are.
      </p>
      <p>
        Assuming positive intent helps you separate the person from the behavior.
        That matters.
      </p>
      <p>
        Instead of saying:
      </p>
      <blockquote>
        <p>You always miss edge cases.</p>
      </blockquote>
      <p>
        You might say:
      </p>
      <blockquote>
        <p>
          In the last two PRs, I noticed a few edge cases were not covered.
          Would it help to add a quick checklist before merging?
        </p>
      </blockquote>
      <p>
        That version is more useful because it focuses on observable behavior,
        references a concrete pattern, and suggests a path forward.
      </p>
      <p>
        A simple structure that works well is:
      </p>
      <ul>
        <li><strong>Observation</strong></li>
        <li><strong>Impact</strong></li>
        <li><strong>Suggestion</strong></li>
      </ul>
      <p>For example:</p>
      <blockquote>
        <p>
          In yesterday’s design meeting, we moved past tradeoffs pretty quickly.
          I think that left a few open questions. Maybe next time we could spend
          a few minutes explicitly listing pros and cons.
        </p>
      </blockquote>
      <p>
        This is the kind of feedback that improves collaboration instead of
        creating tension.
      </p>
    </section>

    <section>
      <h2>Manager-to-Report Feedback</h2>
      <p>
        Feedback changes when you are giving it as a manager.
      </p>
      <p>
        In this case, power flows downward. Your words carry more weight, which
        means your feedback can either create clarity or create fear.
      </p>
      <p>
        One of the most important things a manager can do is separate the person
        from the behavior.
      </p>
      <p>
        Assume positive intent about the individual while being honest about the
        work.
      </p>
      <p>
        Instead of saying:
      </p>
      <blockquote>
        <p>You need to be more senior.</p>
      </blockquote>
      <p>
        Try something like:
      </p>
      <blockquote>
        <p>
          In the last two design discussions, the tradeoffs were not clearly
          articulated. I’d like you to focus on calling those out more
          explicitly in future discussions.
        </p>
      </blockquote>
      <p>
        That version is more effective because it is about behavior, not
        identity.
      </p>
      <p>
        It also makes the path forward visible.
      </p>
      <p>
        Vague feedback like “communicate better” rarely helps someone grow.
        Specific feedback does.
      </p>
      <p>For example:</p>
      <blockquote>
        <p>
          In the last two sprint demos, risks were not mentioned. Going forward,
          I’d like you to include a short risk summary at the end of each demo.
        </p>
      </blockquote>
      <p>
        This connects the feedback to observable behavior and gives the other
        person something clear to practice.
      </p>
      <p>
        For managers, one more principle matters a lot:
      </p>
      <p>
        <strong>Praise publicly. Correct privately.</strong>
      </p>
      <p>
        Psychological safety matters, especially when authority is involved.
      </p>
    </section>

    <section>
      <h2>Managing Up</h2>
      <p>
        Upward feedback is often the most uncomfortable kind to give, but it is
        also one of the most valuable professional skills an engineer can
        develop.
      </p>
      <p>
        The goal here is not criticism. The goal is alignment.
      </p>
      <p>
        When you give feedback upward, frame it around shared outcomes.
      </p>
      <p>
        Instead of saying:
      </p>
      <blockquote>
        <p>You’re unclear in meetings.</p>
      </blockquote>
      <p>
        You could say:
      </p>
      <blockquote>
        <p>
          In planning meetings, I sometimes leave unsure about the priority
          order. Would it help if we summarized the top priorities at the end?
        </p>
      </blockquote>
      <p>
        This shifts the conversation from blame to improvement.
      </p>
      <p>
        It focuses on impact, suggests a practical adjustment, and keeps the
        conversation tied to a shared goal.
      </p>
      <p>
        Managing up also requires judgment.
      </p>
      <ul>
        <li>Consider the timing.</li>
        <li>Consider the relationship.</li>
        <li>Consider whether your tone is calm and constructive.</li>
      </ul>
      <p>
        Upward feedback delivered emotionally rarely lands well. Upward feedback
        delivered thoughtfully often builds trust and respect.
      </p>
    </section>

    <section>
      <h2>Why Positive Intent Matters</h2>
      <p>
        In every direction of feedback, it helps to assume positive intent.
      </p>
      <p>
        That does not mean ignoring problems. It means resisting the urge to
        turn a work issue into a character judgment.
      </p>
      <p>
        It is much easier to give helpful feedback when you start from the idea
        that the other person is trying, but something in their behavior or work
        is not landing the way they intend.
      </p>
      <p>
        That mindset keeps the conversation human and keeps your feedback more
        accurate.
      </p>
    </section>

    <section>
      <h2>A Simple Question to Ask Yourself First</h2>
      <p>
        Before giving feedback, pause and ask yourself one question:
      </p>
      <blockquote>
        <p>
          Is my goal to help this person improve, or to relieve my own
          frustration?
        </p>
      </blockquote>
      <p>
        That distinction matters.
      </p>
      <p>
        When the goal is improvement, your tone becomes calmer, your language
        becomes more specific, and your feedback becomes more useful.
      </p>
      <p>
        When the goal is just emotional release, that usually shows too.
      </p>
    </section>

    <section>
      <h2>Closing Thought</h2>
      <p>
        Giving feedback well is a multiplier.
      </p>
      <p>
        It improves code quality, team clarity, trust, and growth.
      </p>
      <p>
        Peer feedback builds collaboration. Manager feedback builds development.
        Upward feedback builds alignment.
      </p>
      <p>
        Across all three, the pattern stays the same:
      </p>
      <ul>
        <li>Be specific</li>
        <li>Focus on behavior or work</li>
        <li>Keep the conversation aimed at the future</li>
      </ul>
      <p>
        Feedback does not have to be harsh to be honest. And when the aim is
        growth, even critical feedback can be an act of kindness.
      </p>
    </section>
  </article>)
  }
];

export default blogList;
