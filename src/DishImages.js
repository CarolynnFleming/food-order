import React from 'react';

export default function DishImages({ dishId, beverageId, sideId }) {
  return <div className='image-menu'>
      <img className="yum" src={`dish-${dishId}.jpeg`}/>
      <img className="yum" src={`beverage-${beverageId}.jpeg`}/>
  </div>;
}
