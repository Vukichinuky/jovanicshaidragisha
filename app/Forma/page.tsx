'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import EmailForm from '../../components/EmailForm'
function Forma() {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');

  const correctAnswer1 = 'pica'; // replace with your correct answer
  const correctAnswer2 = '837497'; // replace with your correct answer

  const isCorrect = answer1.toLowerCase() === correctAnswer1 && answer2.toLowerCase() === correctAnswer2;  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };
  return (
    <div >
      {!submitted && (
        <>
         <form className='flex-col mt-56 gap-28 flex  items-center justify-center' onSubmit={handleSubmit}>
  <div className='flex flex-col items-center gap-7 justify-center'>
    <label className='text-sm font-semibold'>
      Koja je omiljena hrana dragi na celom svetu?
    </label>
    <input type="text" className='border p-2 rounded-md ml-4' value={answer1} onChange={e => setAnswer1(e.target.value)} />
  </div>
  <div className='flex flex-col gap-7 items-center justify-center'>
    <label className='text-sm font-semibold'>
      Koji je dragi pin na telefonu
    </label>
    <input type="text" className='border p-2 rounded-md ml-4' value={answer2} onChange={e => setAnswer2(e.target.value)} />
  </div>
  <button type="submit" className=' rounded-lg border border-transparent border-gray-300 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>Nastavi</button>
</form> </>
      )}
      {submitted && (
        isCorrect ? (
          <div>
<EmailForm />

          </div>
        ) : (
          <div className='flex items-center justify-center gap-7 felx-row'><p>Odgovori nisu tacni, pokusaj ponovo</p>       <button className=' rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30' onClick={() => window.location.reload()}>Nazad</button>
          </div>
        )
      )}
    </div>
  )
}

export default Forma