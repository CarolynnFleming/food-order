import React from 'react';

export default function DishDropDown({ setDishId }) {
  function handleChange(e) {
    setDishId(e.target.value);
  }
  return (<div>
      Choose A Dish
    <select onChange={handleChange}>
      <option value="1">Spicy Burger</option>
      <option value="2">Avacado Burger</option>
      <option value="3">Vegan Yum Burger</option>
    </select>
  </div>);
}
