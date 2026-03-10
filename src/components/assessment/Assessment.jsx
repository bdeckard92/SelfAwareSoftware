import { useEffect, useMemo, useState } from "react";
import "./Assessment.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Assessment = () => {
  const [questions, setQuestions] = useState([]);
  const [scaleLabels, setScaleLabels] = useState({});
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(`${API_BASE_URL}/api/assessment/questions`);

        if (!response.ok) {
          throw new Error("failed to load assessment questions");
        }

        const data = await response.json();
        setQuestions(data.questions || []);
        setScaleLabels(data.scale?.labels || {});
      } catch (loadError) {
        setError(loadError.message || "failed to load questions");
      } finally {
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, []);

  const answeredCount = useMemo(() => {
    return Object.keys(answers).length;
  }, [answers]);

  const onAnswerChange = (questionId, score) => {
    setAnswers((current) => ({
      ...current,
      [questionId]: Number(score),
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (answeredCount < questions.length) {
      setError("Please answer all questions before submitting.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      const response = await fetch(`${API_BASE_URL}/api/assessment/evaluate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers }),
      });

      if (!response.ok) {
        const payload = await response.json();
        throw new Error(payload.message || "evaluation failed");
      }

      const payload = await response.json();
      setResult(payload);
    } catch (submitError) {
      setError(submitError.message || "failed to evaluate assessment");
      setResult(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <section className="assessment">Loading assessment...</section>;
  }

  return (
    <section className="assessment">
      <h1>Engineering Level Assessment</h1>
      <p className="assessment-subtitle">
        Rate each statement from 1 to 5. You will receive an estimated level and guidance.
      </p>

      {error ? <p className="assessment-error">{error}</p> : null}

      <form className="assessment-form" onSubmit={onSubmit}>
        {questions.map((question) => (
          <fieldset key={question.id} className="assessment-question">
            <legend>{question.prompt}</legend>
            <div className="assessment-options">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name={question.id}
                    value={value}
                    checked={answers[question.id] === value}
                    onChange={() => onAnswerChange(question.id, value)}
                  />
                  <span>
                    {value} - {scaleLabels[value] || ""}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        <button type="submit" disabled={isSubmitting || questions.length === 0}>
          {isSubmitting ? "Evaluating..." : "Get Estimated Level"}
        </button>
      </form>

      {result ? (
        <article className="assessment-result">
          <h2>Estimated Level: {result.estimatedLevel}</h2>
          <p>Average Score: {result.averageScore}</p>
          <p>{result.expectations}</p>
          <p>
            <strong>Strongest Areas:</strong>{" "}
            {result.strongestAreas?.length ? result.strongestAreas.join(", ") : "None identified yet"}
          </p>
          <p>
            <strong>Growth Areas:</strong>{" "}
            {result.growthAreas?.length ? result.growthAreas.join(", ") : "None identified yet"}
          </p>
        </article>
      ) : null}
    </section>
  );
};

export default Assessment;
