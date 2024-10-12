/* eslint-disable no-unused-vars */
import { useState } from 'react';
import FoodCart from './foodCart/foodCart';
import { foodData } from './foodCart/data';


function App() {
 let [index, setIndex] = useState(0);

 let clickHandler = function () {
  setIndex((old => {
    return foodData.length -1 > old ? old + 1 : old - 9;
  }))
 }

 let prevsHandler = function () {
  setIndex((old => {
    return old === 0 ? +9 : --old;
  }))
 }

  return (
    <>
      <FoodCart prevs={prevsHandler} onClick={clickHandler} data={foodData[index]} />
    </>
  )
}

export default App