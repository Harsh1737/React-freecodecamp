import {useState} from 'react';

function App() {

  const [cnt, setcnt] = useState(10);

  const add = () =>{
    setcnt((pre)=>pre+1);
    setcnt((pre)=>pre+1 );
  }
  return (
    <>
      <h1 className="bg-green-500">hello {cnt}</h1>
      <button onClick={add}>Add</button>
    </>
  );
}
export default App;