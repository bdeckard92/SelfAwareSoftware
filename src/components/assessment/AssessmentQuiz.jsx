import { useState, useEffect, useMemo } from 'react';
import { questions, LEVELS, DIMENSION_INSIGHTS } from '../../utils/assessmentQuestions';
import './AssessmentQuiz.css';

// ── Helpers ───────────────────────────────────────────────────────────────────

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const getAverageScore = (answers) => {
  if (answers.length === 0) return 1;
  return answers.reduce((sum, a) => sum + a.level, 0) / answers.length;
};

const getLevelKey = (score) => {
  if (score < 1.75) return 'SE1';
  if (score < 2.5)  return 'SE2';
  if (score < 3.25) return 'SENIOR';
  return 'STAFF';
};

// Maps score 1-4 to % position along the four milestone anchors
const MILESTONE_POSITIONS = [8, 35, 62, 90];

const getCharacterPosition = (score) => {
  const clamped = Math.max(1, Math.min(4, score));
  const idx = Math.min(Math.floor(clamped) - 1, 2);
  const frac = clamped - Math.floor(clamped);
  return MILESTONE_POSITIONS[idx] + frac * (MILESTONE_POSITIONS[idx + 1] - MILESTONE_POSITIONS[idx]);
};

// ── 16-bit style sprite (box-shadow + tile map) ─────────────────────────────
// 4 px per tile, 12 cols x 18 rows. More colors and shading gives a 16-bit vibe.
const TILE = 4;

const SPRITE_PALETTE = {
  o: '#121826', // outline
  h: '#3E2A1F', // dark hair
  H: '#6A4A32', // light hair
  s: '#DEA672', // skin shade
  S: '#F4C191', // skin highlight
  e: '#0E1726', // eyes
  j: '#1F4B99', // jacket dark
  J: '#3A77D2', // jacket light
  a: '#F2C14E', // tie/accent
  p: '#1E243D', // pants dark
  P: '#2E3555', // pants light
  b: '#2B1B12', // boots dark
  B: '#4A2A1D', // boots light
};

const toBoxShadow = (rows, startRow = 0) => rows
  .flatMap((row, rowIdx) => [...row].flatMap((tile, colIdx) => {
    const color = SPRITE_PALETTE[tile];
    if (!color) return [];
    return [`${colIdx * TILE}px ${(startRow + rowIdx) * TILE}px 0 0 ${color}`];
  }))
  .join(', ');

const UPPER_ROWS = [
  '..oooooo....',
  '.ohHHHHHo...',
  '.ohHHHHHHoo.',
  '.ohsSSSSsho.',
  'ooosSeeSSsoo',
  'oosSSSSSSsoo',
  'ooojJaaJjooo',
  '.oojJJJJjoo.',
  '.ojJJJJJJjo.',
  '.ojJjJJjJjo.',
  '.osJjJJjJso.',
  '..opPPPPpo..',
  '..oPPPPPPo..',
];

// Legs apart
const LEGS_ROWS_0 = [
  '.oPPo..oPPo.',
  '.oPPo..oPPo.',
  '.oPPo..oPPo.',
  'ooBBo..oBBoo',
  'obbb....bbbo',
];

// Legs crossing
const LEGS_ROWS_1 = [
  '..oPPPPPPo..',
  '..oPPPPPPo..',
  '..ooPPPPoo..',
  '.ooBBoBBoo..',
  '.obbbbbbbo..',
];

const SPRITE_UPPER = toBoxShadow(UPPER_ROWS);
const LEGS_FRAME_0 = toBoxShadow(LEGS_ROWS_0, UPPER_ROWS.length);
const LEGS_FRAME_1 = toBoxShadow(LEGS_ROWS_1, UPPER_ROWS.length);

const MILESTONES = [
  { key: 'SE1',    label: 'SE I',   pos: MILESTONE_POSITIONS[0] },
  { key: 'SE2',    label: 'SE II',  pos: MILESTONE_POSITIONS[1] },
  { key: 'SENIOR', label: 'Sr.',    pos: MILESTONE_POSITIONS[2] },
  { key: 'STAFF',  label: 'Staff',  pos: MILESTONE_POSITIONS[3] },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function AssessmentQuiz() {
  const [phase, setPhase] = useState('intro'); // 'intro' | 'quiz' | 'result'
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [walkFrame, setWalkFrame] = useState(0);

  // Shuffle answers once per mount so order isn't predictable
  const shuffledQuestions = useMemo(
    () => questions.map((q) => ({ ...q, answers: shuffle(q.answers) })),
    [],
  );

  // Animate walk frames only during quiz
  useEffect(() => {
    if (phase !== 'quiz') return;
    const id = setInterval(() => setWalkFrame((f) => (f + 1) % 2), 350);
    return () => clearInterval(id);
  }, [phase]);

  const currentScore      = getAverageScore(answers);
  const characterPosition = getCharacterPosition(currentScore);
  const currentLevelKey   = getLevelKey(currentScore);

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answer);
    setTimeout(() => {
      const newAnswers = [
        ...answers,
        { level: answer.level, dimension: shuffledQuestions[currentQ].dimension },
      ];
      setAnswers(newAnswers);
      setSelectedAnswer(null);
      if (currentQ + 1 < shuffledQuestions.length) {
        setCurrentQ((q) => q + 1);
      } else {
        setPhase('result');
      }
    }, 350);
  };

  const handleRestart = () => {
    setPhase('intro');
    setCurrentQ(0);
    setAnswers([]);
    setSelectedAnswer(null);
  };

  const dimensionBreakdown = useMemo(() => {
    const grouped = {};
    answers.forEach((a) => {
      if (!grouped[a.dimension]) grouped[a.dimension] = [];
      grouped[a.dimension].push(a.level);
    });
    return Object.entries(grouped).map(([dim, levels]) => {
      const avg = levels.reduce((s, l) => s + l, 0) / levels.length;
      const key = getLevelKey(avg);
      return { dimension: dim, key, label: LEVELS[key].label, color: LEVELS[key].color, avg };
    });
  }, [answers]);

  const topDim = useMemo(() => {
    if (!dimensionBreakdown.length) return null;
    return [...dimensionBreakdown].sort((a, b) => b.avg - a.avg)[0];
  }, [dimensionBreakdown]);

  const bottomDim = useMemo(() => {
    if (!dimensionBreakdown.length) return null;
    return [...dimensionBreakdown].sort((a, b) => a.avg - b.avg)[0];
  }, [dimensionBreakdown]);

  const spriteBoxShadow = `${SPRITE_UPPER}, ${walkFrame === 0 ? LEGS_FRAME_0 : LEGS_FRAME_1}`;

  return (
    <div className="assessment-quiz">

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      {phase === 'intro' && (
        <div className="quiz-intro">
          <span className="quiz-badge pixel-text">ASSESSMENT</span>
          <h1 className="quiz-title pixel-heading">SOFTWARE ENGINEER LEVEL CHECK</h1>
          <p className="quiz-subtitle">
            15 questions across 5 engineering dimensions.<br />
            Where are you on the path?
          </p>
          <div className="quiz-dimensions">
            {['Execution', 'Ownership', 'Collaboration', 'Technical Judgment', 'Influence'].map((d) => (
              <span key={d} className="dimension-chip">{d}</span>
            ))}
          </div>
          <p className="quiz-disclaimer">
            ⚠️ This quiz is for fun and self-reflection only. It is not a performance
            evaluation, an official assessment, or evidence of your level. Please do
            not bring your results to your manager as justification for a raise or
            promotion. Your boss will not be impressed and may even ask why you're
            playing this silly game and not working on that feature... 😅
          </p>
          <button className="pixel-btn" onClick={() => setPhase('quiz')}>
            ▶ START
          </button>
        </div>
      )}

      {/* ── QUIZ ─────────────────────────────────────────────────────────── */}
      {phase === 'quiz' && (
        <div className="quiz-main">
          <div className="quiz-header">
            <span className="quiz-progress pixel-text">
              Q {currentQ + 1} / {shuffledQuestions.length}
            </span>
            <div className="quiz-progress-bar" role="progressbar"
              aria-valuenow={currentQ + 1} aria-valuemin={1} aria-valuemax={shuffledQuestions.length}>
              <div
                className="quiz-progress-fill"
                style={{ width: `${(currentQ / shuffledQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          <div key={currentQ} className="question-card">
            <div className="dimension-label pixel-text">
              {shuffledQuestions[currentQ].dimension}
            </div>
            <p className="question-text">{shuffledQuestions[currentQ].text}</p>
            <div className="answers-grid">
              {shuffledQuestions[currentQ].answers.map((answer, idx) => (
                <button
                  key={idx}
                  className={`answer-btn${selectedAnswer === answer ? ' answer-btn--selected' : ''}`}
                  onClick={() => handleAnswer(answer)}
                  disabled={selectedAnswer !== null}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── RESULT ───────────────────────────────────────────────────────── */}
      {phase === 'result' && (
        <div className="quiz-result">
          <span className="quiz-badge pixel-text">LEVEL ACHIEVED</span>
          <div
            className="result-badge"
            style={{ borderColor: LEVELS[currentLevelKey].color, color: LEVELS[currentLevelKey].color }}
          >
            {LEVELS[currentLevelKey].label}
          </div>
          <p className="result-description">{LEVELS[currentLevelKey].description}</p>

          {topDim && bottomDim && (
            <div className="result-insights">
              <div className="insight-card insight-card--strength">
                <div className="insight-card-header">
                  <span className="insights-heading pixel-text">⚡ STRENGTH</span>
                  <span className="insight-dim-label" style={{ color: topDim.color }}>
                    {topDim.dimension}
                  </span>
                </div>
                <p className="insight-text">
                  {DIMENSION_INSIGHTS[topDim.dimension][topDim.key].strength}
                </p>
              </div>
              <div className="insight-card insight-card--opportunity">
                <div className="insight-card-header">
                  <span className="insights-heading pixel-text">🎯 OPPORTUNITY</span>
                  <span className="insight-dim-label" style={{ color: bottomDim.color }}>
                    {bottomDim.dimension}
                  </span>
                </div>
                <p className="insight-text">
                  {DIMENSION_INSIGHTS[bottomDim.dimension][bottomDim.key].growthTip}
                </p>
              </div>
            </div>
          )}

          <div className="result-breakdown">
            <span className="breakdown-heading pixel-text">BREAKDOWN BY DIMENSION</span>
            {dimensionBreakdown.map(({ dimension, label, color }) => (
              <div key={dimension} className="breakdown-row">
                <span className="breakdown-dim">{dimension}</span>
                <span className="breakdown-level" style={{ color }}>{label}</span>
              </div>
            ))}
          </div>

          <button className="pixel-btn" onClick={handleRestart}>↩ TRY AGAIN</button>
        </div>
      )}

      {/* ── CHARACTER TRACK (quiz + result) ──────────────────────────────── */}
      {phase !== 'intro' && (
        <div className="quiz-track-area">
          <div className="track-road">
            {MILESTONES.map((m) => (
              <div
                key={m.key}
                className={`track-milestone${currentLevelKey === m.key ? ' track-milestone--active' : ''}`}
                style={{ left: `${m.pos}%` }}
              >
                <span className="milestone-label pixel-text">{m.label}</span>
                <div className="milestone-pole" />
                <div className="milestone-dot" />
              </div>
            ))}

            {/* 8-bit walking character */}
            <div
              className={`character-wrapper${
                phase === 'quiz' ? ' character--walking' : ' character--celebrating'
              }`}
              style={{ left: `${characterPosition}%` }}
            >
              {/* Inner wrapper isolates the bob/celebrate transform from the left transition */}
              <div className="character-bob">
                <div
                  className="character-sprite"
                  style={{ boxShadow: spriteBoxShadow }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
