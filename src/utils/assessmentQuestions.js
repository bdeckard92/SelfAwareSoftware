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
