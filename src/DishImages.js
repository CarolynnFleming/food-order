import React from 'react';

export default function DishImages({ dishId, beverageId, sideDishId }) {
  return <div className='image-menu'>
    <img className="yum" src={`dish-${dishId}.jpeg`}/>
    <img className="yum" src={`beverage-${beverageId}.jpeg`}/>
    <img className="yum" src={`side-${sideDishId}.jpeg`}/>
  </div>;
}
