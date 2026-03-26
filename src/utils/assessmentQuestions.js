export const LEVELS = {
  SE1: {
    label: 'Software Engineer I',
    color: '#4CAF50',
    description:
      "You're early in the journey. Stay curious, lean into feedback, and embrace the learning ahead. Every expert started right here.",
  },
  SE2: {
    label: 'Software Engineer II',
    color: '#2196F3',
    description:
      "You're building real momentum. You deliver independently, handle ambiguity well, and your technical judgment is sharpening.",
  },
  SENIOR: {
    label: 'Senior Software Engineer',
    color: '#9C27B0',
    description:
      "You're a force multiplier. You lead complex work, shape technical decisions, and make your whole team better.",
  },
  STAFF: {
    label: 'Staff Software Engineer',
    color: '#FF9800',
    description:
      "You operate at the organizational level. Your thinking spans teams, your impact spans years.",
  },
};

// Per-dimension, per-level: what you're doing well + how to grow
export const DIMENSION_INSIGHTS = {
  Execution: {
    SE1: {
      strength: "You complete well-defined tasks reliably and raise blockers quickly — that responsiveness is a genuine asset.",
      growthTip: "Before escalating ambiguity, write a short summary of what you do and don't know. It sharpens your question, shows initiative, and speeds up the answer you get back.",
    },
    SE2: {
      strength: "You deliver features end-to-end and handle moderate ambiguity without stalling — that's a key differentiator at this level.",
      growthTip: "Own the delivery plan, not just the code. Start estimating proactively, flagging risks early, and scoping down when needed rather than waiting to be asked.",
    },
    SENIOR: {
      strength: "You lead complex work, manage ambiguity, and keep delivery moving across a team — not just for yourself.",
      growthTip: "Build repeatable delivery habits for your team. Lightweight planning templates, a shared definition of done, or a sequencing approach others can learn from — these compound over time.",
    },
    STAFF: {
      strength: "You drive cross-team execution and align technical direction with business outcomes — a rare and high-leverage combination.",
      growthTip: "Make your delivery instincts teachable. Document your sequencing decisions, run planning retrospectives, and develop the same cross-team execution muscle in the senior engineers around you.",
    },
  },
  Ownership: {
    SE1: {
      strength: "You own your assigned tasks and escalate blockers quickly — building a reputation for reliability early is more valuable than most people realize.",
      growthTip: "Start asking 'what could go wrong?' before marking anything done. Anticipating edge cases before review catches them is the first step toward broader ownership.",
    },
    SE2: {
      strength: "You own features end-to-end and anticipate common issues before they surface — that proactive mindset sets you apart.",
      growthTip: "Look for recurring pain points in your area that nobody owns. Naming the problem and proposing a fix — without being asked — is how you move toward system-level ownership.",
    },
    SENIOR: {
      strength: "You own systems, proactively surface risks, and drive problems to resolution without needing direction — that's what the team relies on you for.",
      growthTip: "Work on distributing ownership rather than holding it. The best senior engineers make accountability the default behavior around them, not a single point they personally carry.",
    },
    STAFF: {
      strength: "You own outcomes and problems at an organizational level, keeping both business and technical dimensions in view — that's genuinely hard to do.",
      growthTip: "Build cultures of ownership rather than exerting it yourself. Create norms, incentives, and postmortem habits that make accountability the default across your org.",
    },
  },
  Collaboration: {
    SE1: {
      strength: "You participate actively when invited and absorb feedback well — being coachable early is more valuable than most engineers realize.",
      growthTip: "Share your work before it's finished. A doc, a sketch, or a Slack message while it's still in progress builds trust faster than polished delivery.",
    },
    SE2: {
      strength: "You contribute meaningfully to reviews and help teammates when you can — that collaborative energy matters more than you might think.",
      growthTip: "Pick one person and invest in their growth intentionally. Consistent, targeted mentorship builds your collaboration skills faster than scattered help-when-asked interactions.",
    },
    SENIOR: {
      strength: "You mentor others and actively improve team practices — your team is noticeably better because of how you show up.",
      growthTip: "Look for collaboration friction between teams, not just within yours. Cross-team misalignment is where senior engineers can have their highest-leverage impact — and get noticed beyond their immediate team.",
    },
    STAFF: {
      strength: "You build alignment across groups and enable entire teams — not just individuals — to do their best work.",
      growthTip: "Work on reducing your own involvement over time. The best staff-level collaborators create systems and norms that work without them present — that's how you scale impact.",
    },
  },
  'Technical Judgment': {
    SE1: {
      strength: "You follow established patterns reliably and focus on the 'how' — building a strong foundation before forming strong opinions is exactly right.",
      growthTip: "Start asking 'why' more. Why is this pattern used here? What problem does it solve? What breaks if we do it differently? Understanding the reasoning accelerates judgment faster than just accumulating experience.",
    },
    SE2: {
      strength: "You make sound basic tradeoffs and default toward maintainable solutions — that pragmatic instinct is the right foundation to build on.",
      growthTip: "Document your technical decisions as you make them. A two-sentence decision log sharpens your thinking and builds a habit that becomes critical at senior level.",
    },
    SENIOR: {
      strength: "You analyze tradeoffs deeply and design systems other people can maintain and extend — that's the core of the role.",
      growthTip: "Use 'could someone else own and extend this without me in a year?' as a quality bar. The answer to that question shapes architecture decisions in ways that matter long after you've moved on.",
    },
    STAFF: {
      strength: "You think at a systems level and balance short vs. long-term tradeoffs across teams and time horizons — that perspective is rare.",
      growthTip: "Make your technical judgment teachable. Write down your mental models, host open architecture reviews, and actively develop others' judgment — your influence compounds through people.",
    },
  },
  Influence: {
    SE1: {
      strength: "You absorb knowledge from those around you and contribute organically — that openness to learning is the seed of real influence.",
      growthTip: "Write one thing down per week: a TIL, a short decision note, a doc. Written communication compounds faster than spoken communication. Consistent small output builds influence over time.",
    },
    SE2: {
      strength: "You share what you know and are starting to shape how your team thinks and works — that's real influence, even if it doesn't feel like it yet.",
      growthTip: "Propose one improvement to team process or tooling this quarter, then track whether it gets adopted. Influence is a practice — the feedback loop between proposal, adoption, and outcome is how you develop it.",
    },
    SENIOR: {
      strength: "You shape team decisions and raise engineering standards — others look to you when direction is unclear, and that trust is earned and valuable.",
      growthTip: "Build influence outside your immediate team. Present at a guild, contribute to another team's planning, write something your broader org reads. Lateral reach is what separates senior from staff.",
    },
    STAFF: {
      strength: "You influence without authority and set technical and cultural direction at an organizational level — that's what makes you a genuine multiplier.",
      growthTip: "Invest in the next generation of senior engineers becoming multipliers themselves. Your influence compounds most through people, not through your own direct output.",
    },
  },
};

// level: 1=SE1, 2=SE2, 3=Senior, 4=Staff
export const questions = [
  // ── Execution ────────────────────────────────────────────────────────────
  {
    id: 1,
    dimension: 'Execution',
    text: 'A ticket is assigned to you but the requirements are unclear. What do you do first?',
    answers: [
      { text: 'Ask my team lead to clarify before starting anything.', level: 1 },
      { text: 'Start with reasonable assumptions and check in with the team as I go.', level: 2 },
      { text: 'Break down the ambiguity, propose an approach, and move forward with team alignment.', level: 3 },
      { text: 'Bring all relevant stakeholders together to align on scope and priorities before any work begins.', level: 4 },
    ],
  },
  {
    id: 2,
    dimension: 'Execution',
    text: 'A task keeps running over its estimated time. How do you handle it?',
    answers: [
      { text: 'Let my manager know I\'m running behind.', level: 1 },
      { text: 'Scope it down to a working version and ship incrementally.', level: 2 },
      { text: 'Replan, communicate updated timelines, and actively unblock myself and others.', level: 3 },
      { text: 'Reassess the initiative against business priorities and align the org on the right tradeoffs.', level: 4 },
    ],
  },
  {
    id: 3,
    dimension: 'Execution',
    text: 'When working on a feature, what does "done" mean to you?',
    answers: [
      { text: 'The code works for the main use case.', level: 1 },
      { text: 'The feature works end-to-end, is tested, and is deployed.', level: 2 },
      { text: 'The feature is delivered, observable, maintainable, and the team can support it.', level: 3 },
      { text: 'The feature moves business metrics, stakeholders are aligned, and follow-up work is sequenced.', level: 4 },
    ],
  },

  // ── Ownership ────────────────────────────────────────────────────────────
  {
    id: 4,
    dimension: 'Ownership',
    text: 'You discover a bug in code you didn\'t write. What do you do?',
    answers: [
      { text: 'Mention it to the team and wait for someone to pick it up.', level: 1 },
      { text: 'File a bug report and offer to fix it if it\'s in my area.', level: 2 },
      { text: 'Assess the impact, prioritize it, and ensure it gets resolved.', level: 3 },
      { text: 'Treat it as a signal of a broader system issue and investigate root cause across the org.', level: 4 },
    ],
  },
  {
    id: 5,
    dimension: 'Ownership',
    text: 'A critical incident hits your service. What\'s your approach?',
    answers: [
      { text: 'Report it at standup the next morning.', level: 1 },
      { text: 'Page whoever is on-call and help investigate if I can.', level: 2 },
      { text: 'Lead the response — diagnose, mitigate, communicate status, and write a postmortem.', level: 3 },
      { text: 'Coordinate across multiple teams, manage stakeholder communications, and drive systemic fixes.', level: 4 },
    ],
  },
  {
    id: 6,
    dimension: 'Ownership',
    text: 'How do you think about the long-term health of the codebase you work in?',
    answers: [
      { text: 'I try to follow the patterns already in place.', level: 1 },
      { text: 'I keep my changes clean and flag issues I notice.', level: 2 },
      { text: 'I identify tech debt, propose solutions, and drive improvements over time.', level: 3 },
      { text: 'I influence architecture decisions and engineering standards across teams.', level: 4 },
    ],
  },

  // ── Collaboration ─────────────────────────────────────────────────────────
  {
    id: 7,
    dimension: 'Collaboration',
    text: 'How do you approach code reviews?',
    answers: [
      { text: 'I read feedback and try to apply it to my PRs.', level: 1 },
      { text: 'I give and receive feedback and help improve the team\'s code quality.', level: 2 },
      { text: 'I use reviews to mentor, raise the bar, and establish clearer team norms.', level: 3 },
      { text: 'I shape review culture across multiple teams to serve broader engineering outcomes.', level: 4 },
    ],
  },
  {
    id: 8,
    dimension: 'Collaboration',
    text: 'A junior engineer is stuck on a concept you understand well. What do you do?',
    answers: [
      { text: 'Tell them to ask the senior engineer on the team.', level: 1 },
      { text: 'Explain it myself and point them to useful resources.', level: 2 },
      { text: 'Pair with them, help them grow, and think about how to scale that knowledge across the team.', level: 3 },
      { text: 'Identify patterns in knowledge gaps and build programs to address them at scale.', level: 4 },
    ],
  },
  {
    id: 9,
    dimension: 'Collaboration',
    text: 'You disagree with a teammate on an important technical decision. What do you do?',
    answers: [
      { text: 'Defer to the more experienced person.', level: 1 },
      { text: 'Share my perspective with data and accept the team\'s decision.', level: 2 },
      { text: 'Facilitate a structured discussion, drive to a decision, and document the reasoning.', level: 3 },
      { text: 'Create alignment across teams, manage org dynamics, and ensure the decision serves long-term goals.', level: 4 },
    ],
  },

  // ── Technical Judgment ────────────────────────────────────────────────────
  {
    id: 10,
    dimension: 'Technical Judgment',
    text: 'How do you choose between two technical approaches?',
    answers: [
      { text: 'Go with whatever the team usually does.', level: 1 },
      { text: 'Compare the basic tradeoffs and pick the more maintainable option.', level: 2 },
      { text: 'Analyze tradeoffs deeply, consider long-term implications, and document the decision.', level: 3 },
      { text: 'Evaluate architectural, organizational, and business implications across teams and timeframes.', level: 4 },
    ],
  },
  {
    id: 11,
    dimension: 'Technical Judgment',
    text: 'How do you think about performance when building a feature?',
    answers: [
      { text: 'Make it work first and ask the team about performance concerns later.', level: 1 },
      { text: 'Avoid obvious antipatterns and consider common performance pitfalls.', level: 2 },
      { text: 'Benchmark, profile, and make deliberate performance decisions early in design.', level: 3 },
      { text: 'Set performance standards for the platform and ensure systems are resilient at scale.', level: 4 },
    ],
  },
  {
    id: 12,
    dimension: 'Technical Judgment',
    text: 'How do you approach designing a new system from scratch?',
    answers: [
      { text: 'Find similar existing code and follow the same patterns.', level: 1 },
      { text: 'Plan the structure, pick known patterns, and check with the team.', level: 2 },
      { text: 'Write an RFC, design for extensibility, and drive team alignment before building.', level: 3 },
      { text: 'Set technical direction at an org level, managing cross-team dependencies and long-term tradeoffs.', level: 4 },
    ],
  },

  // ── Influence ─────────────────────────────────────────────────────────────
  {
    id: 13,
    dimension: 'Influence',
    text: 'How do you typically share what you learn with your team?',
    answers: [
      { text: 'I mention it in conversation when it naturally comes up.', level: 1 },
      { text: 'I share links, write short summaries, or raise it at team meetings.', level: 2 },
      { text: 'I run workshops, write internal guides, and actively raise the team\'s knowledge level.', level: 3 },
      { text: 'I build knowledge-sharing systems and programs that scale across the organization.', level: 4 },
    ],
  },
  {
    id: 14,
    dimension: 'Influence',
    text: 'How do you get others to adopt a new practice or technology?',
    answers: [
      { text: 'Suggest it and see if anyone is interested.', level: 1 },
      { text: 'Write up a proposal and present it to the team.', level: 2 },
      { text: 'Build buy-in, run a pilot, prove it out, and drive adoption.', level: 3 },
      { text: 'Align leadership and cross-functional teams to create momentum for org-wide change.', level: 4 },
    ],
  },
  {
    id: 15,
    dimension: 'Influence',
    text: 'How do you measure the impact of your work?',
    answers: [
      { text: 'By whether my tasks are completed on time.', level: 1 },
      { text: 'By whether my features ship and work well.', level: 2 },
      { text: 'By whether my work improves team velocity, quality, or outcomes.', level: 3 },
      { text: 'By whether I\'ve made other engineers, teams, or the business measurably more effective.', level: 4 },
    ],
  },
];
