import { useState } from "react";
function App() {

  // let counter =5;
  let [count, setCount] = useState(0);

  const AddValue = () => {
    if(count < 20){
      count = count + 1;
      setCount(count);
    }
  }
  const RemoveValue = () => {
    if(count > 0){
    count = count - 1;
    setCount(count);
    }
  }

  return (
    <>
    <h1>Chai</h1>
    <h2>count Value : {count}</h2>
    <button
    onClick = {AddValue}
    >Add value</button>
    <br />
    <button
    onClick = {RemoveValue}
    >Decrease value</button>
    </>
  )
}
export default App