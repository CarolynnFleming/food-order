import React from 'react';
import { useState } from 'react';

export default function InstructionForm({ setBasicInstuctions, basicInstructions }) {
  const [instructionForm, setInstructiomForm] = useState('');

  function handleSubmit(e){
    e.preventDefault();

    setBasicInstuctions([...basicInstructions, instructionForm]);

    setInstructiomForm('');
  }

  function handleInstructionChange(e) {
    setInstructiomForm(e.target.value);
  }
  return <form onSubmit={handleSubmit}>
    <label>
      <input required value={instructionForm} onChange={handleInstructionChange}/>
    </label>
    <div>
      <button className='button'>Add Instruction</button></div>
  </form>;
}
