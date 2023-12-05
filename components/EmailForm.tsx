'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image'
function EmailForm() {
    const [form, setForm] = useState({  question1: '', question2: '', question3: '',question4: '', message:'' }); 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    emailjs.send('service_ivhi3fh', 'template_hoohh4c', form, 'hQ5FLvng7576T2WDd')
      .then((result) => {
          console.log(result.text);
          if (form.question3 === 'yes') {
            window.alert('06.12.2023 u 21:00 da odemo na dejt cekacu te u kamenici');
          }
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form className='flex flex-col p-5 justify-center items-center gap-10' onSubmit={handleSubmit}>
    <label className='border p-2 rounded-md'>
Da li zelis da razgovaramo i pokusamo da resimo ovo?  <select name="question3" onChange={handleChange}>
    <option value="">Izaberi...</option>
    <option value="yes">Da</option>
    <option value="no">Ne</option>
  </select>
</label>
{form.question3 === 'yes' && <label className='border p-2 rounded-md'>
  Hajde da poradimo na nama malo?
  <select name="question4" onChange={handleChange}>
    <option value="">Izaberi...</option>
    <option value="yes">Hajde</option>
    <option value="yes2">Hajde</option>
  </select>
</label> }

    <label className='border p-2 rounded-md'>
  Da li je jovana pozelela dragu?
  <select className='p-3' name="question1" onChange={handleChange}>
    <option value="">Izaberi...</option>
    <option value="yes">Jeste</option>
    <option value="no">Nije</option>
  </select>
</label>
{form.question1 === 'yes' && <h1>I drago je pozeleo Jovanu</h1>}
<label className='border p-2 rounded-md'>
Koliko je Drago pozeljen ako jeste? btw na 10 dobijas sliku mace
  <select className='p-3' name="question2" onChange={handleChange}>
    <option value="">Izaberi...</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>

  </select>
</label>
{form.question2 === '10' && <Image height={300} alt='slika mace'  width={300} src='/OIP.jpeg'/>}

<label className='border p-2 flex items-center justify-center rounded-md'>
  Imas li ti sta da kazes?:
  <textarea className='border p-2 rounded-md' name="message" onChange={handleChange} />
</label>

   
    <input className=' rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-400 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 cursor-pointer hover:dark:bg-neutral-800/30' type="submit" value="Posalji" />
  </form>
  );
}

export default EmailForm;