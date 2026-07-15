import React from 'react'

const Result = ({score, all_questions}) => {
  return (
    <>
        <h1 className='text-center my-8 font-bold text-3xl text-amber-600'>Quiz Result</h1>
        <p className='text-center text-2xl font-semibold '>Your Total Score is : {score} / {all_questions.length}</p>

        <p className='text-center text-4xl mt-8 text-amber-400 font-bold'>🎉 YAY!!!</p>
    </>
  )
}

export default Result