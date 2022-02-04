import React from 'react';

export default function SideDishDropDown({ setSideDishId }) {
  function handleChange(e) {
    setSideDishId(e.target.value);
  }
  return (<div>
 Choose a Side:
    <select onChange={handleChange}>
      <option value="1">Fries</option>
      <option value="2">Fried Pickles</option>
      <option value="3">Cucumber Salade</option>
    </select>
  </div>);
}
