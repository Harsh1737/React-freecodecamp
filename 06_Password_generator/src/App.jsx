import { useState, useCallback, useEffect } from 'react'
import './App.css'

  // UseCallback is used to prevent the function from being recreated every time the component is rendered
  // It is a react hook that lets you cache a function definition between re-renders.
  // useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed
  // useCallback is used to optimize the performance of the application by memoizing the function

function App() {
  const [Length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator =useCallback(() => {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numberSet = '0123456789'
    let specialCharSet = '!@#$%^&*()_+~`|}{[]:;?><,./-='
    
    let password = ''
    let str = charset
    
    if (numberAllowed) str += numberSet
    if (charAllowed) str += specialCharSet

    for (let i = 0; i < Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)
    }
    setPassword(password)
  },[Length, numberAllowed, charAllowed, setPassword])

  useEffect( () => passwordGenerator(), [Length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div
      className='w-full max-w-md mx-auto shadow-md px-5 my-5 rounded-lg bg-gray-800 text-white'
      >
        <h1 className='text-center my-3 py-1'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4 '>

          <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3 text-black'
          placeholder ='Password'
          readOnly
          />

          <button
          className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1' >
            <input type="range" min={6} max={100} value={Length} className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}

            />
            <label htmlFor="">Length: {Length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox" id="number" defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              />
            <label htmlFor="numbeInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox" id="character" defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              />
            <label htmlFor="numbeInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App