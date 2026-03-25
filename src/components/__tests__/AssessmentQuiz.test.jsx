import { act, fireEvent, render, screen } from '@testing-library/react';
import AssessmentQuiz from '../assessment/AssessmentQuiz';
import { questions, LEVELS } from '../../utils/assessmentQuestions';

// ── helpers ───────────────────────────────────────────────────────────────────

const startQuiz = () => {
  fireEvent.click(screen.getByRole('button', { name: /start/i }));
};

// Advance through all questions by always clicking the first answer button
const completeQuiz = () => {
  const total = questions.length;
  for (let i = 0; i < total; i++) {
    const answerBtns = screen.getAllByRole('button').filter(
      (b) => !b.classList.contains('pixel-btn'),
    );
    fireEvent.click(answerBtns[0]);
    // flush the 350ms setTimeout + React state updates without spinning the setInterval
    act(() => { vi.advanceTimersByTime(400); });
  }
};

// ── Intro screen ──────────────────────────────────────────────────────────────

describe('AssessmentQuiz — intro screen', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    render(<AssessmentQuiz />);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the intro heading', () => {
    expect(
      screen.getByRole('heading', { name: /software engineer level check/i }),
    ).toBeInTheDocument();
  });

  it('renders the five dimension chips', () => {
    const dims = ['Execution', 'Ownership', 'Collaboration', 'Technical Judgment', 'Influence'];
    dims.forEach((d) => expect(screen.getByText(d)).toBeInTheDocument());
  });

  it('renders a START button', () => {
    expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
  });

  it('does not show the character track before the quiz begins', () => {
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
  });
});

// ── Quiz screen ───────────────────────────────────────────────────────────────

describe('AssessmentQuiz — quiz screen', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    render(<AssessmentQuiz />);
    startQuiz();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('shows question 1 of N after clicking START', () => {
    expect(
      screen.getByText(new RegExp(`Q 1 / ${questions.length}`, 'i')),
    ).toBeInTheDocument();
  });

  it('renders a progress bar', () => {
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders exactly 4 answer buttons for the first question', () => {
    const answerBtns = screen.getAllByRole('button').filter(
      (b) => !b.classList.contains('pixel-btn'),
    );
    expect(answerBtns).toHaveLength(4);
  });

  it('disables all answer buttons immediately after a selection', async () => {
    const answerBtns = screen.getAllByRole('button').filter(
      (b) => !b.classList.contains('pixel-btn'),
    );
    fireEvent.click(answerBtns[0]);

    const allAnswers = screen.getAllByRole('button').filter(
      (b) => !b.classList.contains('pixel-btn'),
    );
    allAnswers.forEach((b) => expect(b).toBeDisabled());
  });

  it('advances to question 2 after answering question 1', () => {
    const answerBtns = screen.getAllByRole('button').filter(
      (b) => !b.classList.contains('pixel-btn'),
    );
    fireEvent.click(answerBtns[0]);
    act(() => { vi.advanceTimersByTime(400); });

    expect(screen.getByText(/Q 2 \//i)).toBeInTheDocument();
  });

  it('shows the dimension label for the current question', () => {
    const dims = ['Execution', 'Ownership', 'Collaboration', 'Technical Judgment', 'Influence'];
    const labels = dims.filter((d) =>
      screen.queryByText(d) !== null,
    );
    expect(labels.length).toBeGreaterThanOrEqual(1);
  });
});

// ── Result screen ─────────────────────────────────────────────────────────────

describe('AssessmentQuiz — result screen', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    render(<AssessmentQuiz />);
    startQuiz();
    completeQuiz();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('shows the "LEVEL ACHIEVED" badge after all questions are answered', () => {
    expect(screen.getByText(/level achieved/i)).toBeInTheDocument();
  });

  it('displays one of the four known level labels', () => {
    const levelLabels = Object.values(LEVELS).map((l) => l.label);
    const badge = document.querySelector('.result-badge');
    expect(levelLabels).toContain(badge.textContent.trim());
  });

  it('renders dimension breakdown with known dimension names', () => {
    const dims = ['Execution', 'Ownership', 'Collaboration', 'Technical Judgment', 'Influence'];
    dims.forEach((d) => expect(screen.getByText(d)).toBeInTheDocument());
  });

  it('shows a TRY AGAIN button on the result screen', () => {
    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();
  });

  it('resets to the intro screen when TRY AGAIN is clicked', () => {
    fireEvent.click(screen.getByRole('button', { name: /try again/i }));
    expect(
      screen.getByRole('heading', { name: /software engineer level check/i }),
    ).toBeInTheDocument();
  });
});

// ── Question data integrity ───────────────────────────────────────────────────

describe('assessmentQuestions data', () => {
  it('has between 10 and 20 questions', () => {
    expect(questions.length).toBeGreaterThanOrEqual(10);
    expect(questions.length).toBeLessThanOrEqual(20);
  });

  it('every question has exactly 4 answers', () => {
    questions.forEach((q) => {
      expect(q.answers).toHaveLength(4);
    });
  });

  it('every answer has a level between 1 and 4', () => {
    questions.forEach((q) => {
      q.answers.forEach((a) => {
        expect(a.level).toBeGreaterThanOrEqual(1);
        expect(a.level).toBeLessThanOrEqual(4);
      });
    });
  });

  it('each question has one answer per level (1, 2, 3, 4)', () => {
    questions.forEach((q) => {
      const levels = q.answers.map((a) => a.level).sort();
      expect(levels).toEqual([1, 2, 3, 4]);
    });
  });

  it('all four LEVELS entries have a label, color, and description', () => {
    Object.values(LEVELS).forEach((l) => {
      expect(l.label).toBeTruthy();
      expect(l.color).toMatch(/^#[0-9A-Fa-f]{6}$/);
      expect(l.description).toBeTruthy();
    });
  });
});
