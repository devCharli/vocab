import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TestPage = () => {
  const [quizzes, setQuizzes] = useState<{ id: string; title: string }[]>([]);

  useEffect(() => {
    import("../../../data/QuizIndex.json").then((data) => {
      setQuizzes(data.default);
    });
  }, []);

  if (quizzes.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{quizzes.length} Grammar Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link to={`/grammar/test/${quiz.id}/`}> {quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
