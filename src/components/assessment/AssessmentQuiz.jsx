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

// ── Pixel-art sprite (box-shadow technique, 5 px/cell, 8 cols × 14 rows) ────
//   col offset = col * 5px,  row offset = row * 5px
//   Grid layout:
//   row 0-1 : hair top
//   row 2-5 : head/face (eyes at col 3, col 5 in row 3)
//   row 6-9 : shirt / arms
//   row 10  : waist
//   row 11-12: legs  (differ between frames)
//   row 13  : boots  (differ between frames)

const SPRITE_UPPER = [
  // Hair #5C3317
  '10px 0px 0 0 #5C3317','15px 0px 0 0 #5C3317','20px 0px 0 0 #5C3317','25px 0px 0 0 #5C3317',
  '5px 5px 0 0 #5C3317','10px 5px 0 0 #5C3317','15px 5px 0 0 #5C3317','20px 5px 0 0 #5C3317','25px 5px 0 0 #5C3317','30px 5px 0 0 #5C3317',
  '5px 10px 0 0 #5C3317','30px 10px 0 0 #5C3317',
  '5px 15px 0 0 #5C3317','30px 15px 0 0 #5C3317',
  '5px 20px 0 0 #5C3317','30px 20px 0 0 #5C3317',
  // Skin #F4C08A
  '10px 10px 0 0 #F4C08A','15px 10px 0 0 #F4C08A','20px 10px 0 0 #F4C08A','25px 10px 0 0 #F4C08A',
  '10px 15px 0 0 #F4C08A','20px 15px 0 0 #F4C08A',
  '10px 20px 0 0 #F4C08A','15px 20px 0 0 #F4C08A','20px 20px 0 0 #F4C08A','25px 20px 0 0 #F4C08A',
  '10px 25px 0 0 #F4C08A','15px 25px 0 0 #F4C08A','20px 25px 0 0 #F4C08A','25px 25px 0 0 #F4C08A',
  // Eyes #1a1a2e
  '15px 15px 0 0 #1a1a2e','25px 15px 0 0 #1a1a2e',
  // Shirt collar row 6 #2196F3
  '5px 30px 0 0 #2196F3','10px 30px 0 0 #2196F3','15px 30px 0 0 #2196F3','20px 30px 0 0 #2196F3','25px 30px 0 0 #2196F3','30px 30px 0 0 #2196F3',
  // Arms row 7 #2196F3 (full width)
  '0px 35px 0 0 #2196F3','5px 35px 0 0 #2196F3','10px 35px 0 0 #2196F3','15px 35px 0 0 #2196F3','20px 35px 0 0 #2196F3','25px 35px 0 0 #2196F3','30px 35px 0 0 #2196F3','35px 35px 0 0 #2196F3',
  // Torso rows 8-9 #1565C0
  '5px 40px 0 0 #1565C0','10px 40px 0 0 #1565C0','15px 40px 0 0 #1565C0','20px 40px 0 0 #1565C0','25px 40px 0 0 #1565C0','30px 40px 0 0 #1565C0',
  '5px 45px 0 0 #1565C0','10px 45px 0 0 #1565C0','15px 45px 0 0 #1565C0','20px 45px 0 0 #1565C0','25px 45px 0 0 #1565C0','30px 45px 0 0 #1565C0',
  // Waist row 10 #1A237E
  '10px 50px 0 0 #1A237E','15px 50px 0 0 #1A237E','20px 50px 0 0 #1A237E','25px 50px 0 0 #1A237E',
].join(', ');

// Frame 0 — legs apart
const LEGS_FRAME_0 = [
  '5px 55px 0 0 #1A237E','10px 55px 0 0 #1A237E','25px 55px 0 0 #1A237E','30px 55px 0 0 #1A237E',
  '5px 60px 0 0 #1A237E','10px 60px 0 0 #1A237E','25px 60px 0 0 #1A237E','30px 60px 0 0 #1A237E',
  '0px 65px 0 0 #1B1B1B','5px 65px 0 0 #1B1B1B','10px 65px 0 0 #1B1B1B',
  '25px 65px 0 0 #1B1B1B','30px 65px 0 0 #1B1B1B','35px 65px 0 0 #1B1B1B',
].join(', ');

// Frame 1 — legs together (mid-stride)
const LEGS_FRAME_1 = [
  '10px 55px 0 0 #1A237E','15px 55px 0 0 #1A237E','20px 55px 0 0 #1A237E','25px 55px 0 0 #1A237E',
  '10px 60px 0 0 #1A237E','15px 60px 0 0 #1A237E','20px 60px 0 0 #1A237E','25px 60px 0 0 #1A237E',
  '5px 65px 0 0 #1B1B1B','10px 65px 0 0 #1B1B1B','15px 65px 0 0 #1B1B1B',
  '20px 65px 0 0 #1B1B1B','25px 65px 0 0 #1B1B1B','30px 65px 0 0 #1B1B1B',
].join(', ');

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
