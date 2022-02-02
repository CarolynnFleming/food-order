import './App.css';
import { useState } from 'react';
import DishImages from './DishImages.js';
import NameInput from './NameInput.js';
import InstructionList from './InstructionList.js';


function App() {
  const [dishId, theDishId] = useState(1);
  const [beverageId, theBeverageId] = useState(1);
  const [sideDishId, theSideDishId] = useState(1);
  const [orderName, theOrderName] = useState('loyal customer');
  const [basicInstructions, theBasicInstructions] = useState(['Make it GREAT!!!', 'Make it  YUMMY!!!']);
  return (
    <div className="App">
      <h1>Order for {orderName}</h1>
      <DishImages dishId={dishId} beverageId={beverageId} sideDishId={sideDishId}/>
      <NameInput theOrderName={theOrderName}/>
    </div>
  );
}

export default App;
