import './App.css';
import { useState } from 'react';
import DishImages from './DishImages.js';
import NameInput from './NameInput.js';


function App() {
  const [dishId, theDishId] = useState(1);
  const [beverageId, theBeverageId] = useState(1);
  const [sideDishId, theSideDishId] = useState(1);
  const [orderName, theOrderName] = useState('loyal customer');
  return (
    <div className="App">
      <DishImages dishId={dishId} beverageId={beverageId} sideDishId={sideDishId}/>
    </div>
  );
}

export default App;
