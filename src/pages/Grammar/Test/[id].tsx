import { useState } from "react";
import { Link } from "react-router-dom";
import questions from "../../../data/1_beVerb.json";

export default function Test() {
  const [step, setStep] = useState(0);
  const [numQuestions, setNumQuestions] = useState(10);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [progress, setProgress] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const startTest = (num: number) => {
    setNumQuestions(num);
    setStep(1);
  };

  interface Answer {
    questionId: number;
    answer: string;
  }

  interface Question {
    id: number;
    text: string;
    options: string[];
    correct: string;
  }

  interface SelectAnswer {
    (questionId: number, answer: string): void;
  }

  const selectAnswer: SelectAnswer = (questionId, answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, { questionId, answer }]);
    setProgress((step / Math.min(questions.length, numQuestions)) * 100);
    setTimeout(() => {
      if (step < Math.min(questions.length, numQuestions)) {
        setStep(step + 1);
      } else {
        setStep(step + 1);
      }
    }, 1000);
  };

  const resetTest = () => {
    setStep(0);
    setAnswers([]);
    setProgress(0);
  };

  interface Question {
    id: number;
    correct: string;
  }

  const score = answers.filter((ans: Answer) => {
    const question = questions.find((q: Question) => q.id === ans.questionId);
    return question ? ans.answer === question.correct : false;
  }).length;

  return (
    <div className="App">
      <Link to="/test/1">Test1</Link>
      {step === 0 && (
        <div>
          <button onClick={() => startTest(10)}>빈칸 맞추기</button>
          <button onClick={() => startTest(20)}>문장 해석하기</button>
        </div>
      )}

      {step > 0 && step <= Math.min(questions.length, numQuestions) && (
        <>
          <h3>{questions[step - 1].text}</h3>
          <div className="buttons">
            {questions[step - 1].options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(questions[step - 1].id, option)}
                className={`button-option ${
                  answers.some(
                    (ans) =>
                      ans.questionId === questions[step - 1].id &&
                      ans.answer === option
                  )
                    ? option === questions[step - 1].correct
                      ? "correct"
                      : "wrong"
                    : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}

      {step >= 1 && step <= numQuestions && (
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      {step === Math.min(questions.length, numQuestions) + 1 && (
        <div>
          <h2>
            Your score is {score}/{Math.min(questions.length, numQuestions)}
          </h2>
          <button onClick={resetTest}>Reset</button>
          <div className="ad-container">
            {/* Paste your AdSense ad code here */}
          </div>
          <button onClick={() => setShowAnswer(!showAnswer)}>Review</button>

          {showAnswer && (
            <div>
              {questions
                .slice(0, Math.min(questions.length, numQuestions))
                .map((question) => (
                  <div key={question.id}>
                    <p>{question.text}</p>
                    <p>Correct answer: {question.correct}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
      <hr />
      <br />
    </div>
  );
  // const { id } = useParams();
  // return <div>{id}</div>;
}
