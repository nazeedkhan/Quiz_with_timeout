import React, { useEffect, useState } from "react";
import Questions from "./components/Questions";
import Result from "./components/Result";
import Timeout from "./components/Timeout";
import all_questions from "./questions.json";

const App = () => {
  const [over, setOver] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen w-screen">
        {over ? (
          <Result score={score} all_questions={all_questions} />
        ) : (
          <>
            <Timeout setOver={setOver} />
            <Questions
              setOver={setOver}
              setScore={setScore}
              all_questions={all_questions}
            />
          </>
        )}
      </div>
    </>
  );
};

export default App;
