import React from 'react';

export default function BeverageDropDown({ setBeverageId }) {
  function handleChange(e) {
    setBeverageId(e.target.value);
  }
  return (<div>
      Choose a Beverage:
    <select onChange={handleChange}>
      <option value="1">Mai Tai</option>
      <option value="2">Pina Colada</option>
      <option value="3">Frozen Irish Coffee</option>
    </select>
  </div>);
}
