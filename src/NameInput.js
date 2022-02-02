import React from 'react';

export default function NameInput({ theOrderName }) {
  function handleChange(e) {
    theOrderName(e.target.value);
  }
  return <div></div>;
}
