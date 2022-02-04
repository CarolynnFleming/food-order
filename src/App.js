import './App.css';
import { useState } from 'react';
import DishImages from './DishImages.js';
import NameInput from './NameInput.js';
import InstructionList from './InstructionList.js';
import DishDropDown from './DishDropDown.js';
import BeverageDropDown from './BeverageDropDown.js';
import SideDishDropDown from './SideDishDropDown.js';
import InstructionForm from './InstructionForm';


function App() {
  const [dishId, setDishId] = useState(1);
  const [beverageId, setBeverageId] = useState(1);
  const [sideDishId, setSideDishId] = useState(1);
  const [orderName, setOrderName] = useState('loyal customer');
  const [basicInstructions, setBasicInstructions] = useState(['Make it GREAT!!!', 'Make it  YUMMY!!!']);
  return (
    <div className="App">
      <h1>Order for {orderName}</h1>
      <DishImages dishId={dishId} beverageId={beverageId} sideDishId={sideDishId}/>
      <NameInput setOrderName={setOrderName}/>
      <InstructionList basicInstructions={basicInstructions}/>
      <section>
        <DishDropDown setDishId={setDishId}/>
        <BeverageDropDown setBeverageId={setBeverageId}/>
        <SideDishDropDown setSideDishId={setSideDishId}/>
      </section>
      <InstructionForm basicInstructions={basicInstructions} setBasicInstuctions={setBasicInstructions}/>
    </div>
  );
}

export default App;
