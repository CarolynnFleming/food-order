import React from 'react';
import { useState } from 'react';

export default function InstructionForm({ setBasicInstuctions, basicInstructions }) {
  const [instructionForm, setInstructiomForm] = useState('');

  function handleSubmit(e){
      e.preventDefault();

      setBasicInstuctions([...basicInstructions, instructionForm]);

      setInstructiomForm('');
  }
  return <div></div>;
}
