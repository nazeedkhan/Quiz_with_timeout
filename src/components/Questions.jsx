import React, { useEffect, useState } from "react";

const Questions = ({ setOver, setScore, all_questions }) => {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);

  function handleNextQuestion(option) {
    if (all_questions[currentQuestionId].answer === option) {
      setScore((prev) => prev + 1);
    }
    if (currentQuestionId >= all_questions.length - 1) {
      setOver(true);
      return;
    }
    setCurrentQuestionId((prev) => prev + 1);
  }

  return (
    <>
      <h2 className="text-center text-2xl font-bold mb-10">
        {" "}
        {`Question ${currentQuestionId+1}. ${all_questions[currentQuestionId].question}`}
      </h2>
      <div className="flex flex-col gap-3 text-center items-center">
        {all_questions[currentQuestionId].options.map((option, index) => {
          return (
            <button
              onClick={() => handleNextQuestion(option)}
              className="bg-black border-2 px-3 py-2 w-[50vw] rounded-2xl text-white hover:bg-white hover:text-black transition-all duration-300"
              key={index}
            >
              {`${index + 1}. ${option}`}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Questions;
