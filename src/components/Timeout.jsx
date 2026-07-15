import React, { useEffect, useState } from "react";

const Timeout = ({ setOver }) => {
  const [timeRemaining, setTimeRemaining] = useState(70);

  useEffect(() => {
    let interval_id = setInterval(() => {
      setTimeRemaining((prev) => {
        console.log(prev);
        if (prev <= 0) {
          clearInterval(interval_id);
          setOver(true);
          return 0;
        }
        return prev - 1;
      });
      return () => {
        clearInterval(interval_id);
      };
    }, 1000);
  }, []);

  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-10">
        ⏱️ Time Left :{" "}
        {`${Math.floor(timeRemaining / 60)
          .toString()
          .padStart(
            2,
            0,
          )} Min ${(timeRemaining % 60).toString().padStart(2, 0)} Sec`}
      </h1>
    </>
  );
};

export default Timeout;
