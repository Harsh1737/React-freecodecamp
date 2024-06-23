/* eslint-disable no-unused-vars */
import { useState , useCallback, useEffect} from 'react'
import './App.css'

function App() {
	const [length,setLength] = useState(8);
    const [numAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
	const [password, setPassword] = useState("")


	//Aim is to call this function at multiple places like length,char,num ...
	// Optimise way is to use useCallback Hook
	// It caches the function definition between re-renders

	//num, char are the dependencies i.e array of states (var) which affects the function
	const passwordGenerator = useCallback( () => {
		let pass = ""
		let str = "ABCDEFGHIJKLMNOPWRSRUVWXYZabcdefghijkllmnopqrstuvwxyz"

		if (numAllowed) str+="0123456789"
		if (charAllowed) str+="!@#$%^&*()_+~`{}[]|"

		for(let i=0; i <= length; i++){
			let random_char_index = Math.floor(Math.random()*str.length + 1);
			pass += str.charAt(random_char_index);

		}

		setPassword(pass);

	}, [length,numAllowed,charAllowed,setPassword]);



	useEffect( () => {passwordGenerator() }, [length,numAllowed,charAllowed, passwordGenerator])
    return (
		<>
			<h1 className='text-4xl text-center text-white'>Password Generator</h1>
			<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-grey-800'>
			
			<div className='flex shadow rounded-lg overflow-hidden mb-4'>
				<input
				type="text" 
				value={password}
				className='outlin-none w-full py-1 px-3'
				placeholder='Password'
				readOnly
				/>
				<button
					className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

			</div>

			<div className='flex text-sm gap-x-2'>
				<div className='flex items-center gap-x-1'>
					<input 
					type="range"
					min={6}
					max={100}
					value={length}
					className='cursor-pointer'
					onChange={ (e) => {setLength(e.target.value)}}
					/>
					<label >Length: {length}
					</label>
				</div>
				<div>
					<input
					type='checkbox'
					defaultChecked={numAllowed}
					id = "numberInput"
					onChange={ () => setNumberAllowed((prev) => !prev)}
					></input>

					<label htmlFor="numberInput">Numbers</label>
				</div>
				<div>
					<input
					type='checkbox'
					defaultChecked={charAllowed}
					id = "charInput"
					onChange={ () => setNumberAllowed((prev) => !prev)}
					></input>

					<label htmlFor="charInput">Character</label>
				</div>
			</div>

			</div>
		</>
  )
}

export default App
