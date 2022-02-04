import React from 'react';

export default function InstructionList(props) {
  return <section className='instruction-list'>
    <h2>Customer Instructions:</h2>
    <ul>{props.basicInstructions.map((order, i) => <li key={`${order}-${i}`}>{order}</li>)}
    </ul>
  </section>;
}
