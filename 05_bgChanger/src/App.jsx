import { useState } from 'react'
// import Button from './components/Button'
import './App.css'

function App() {

  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen'
      style={{backgroundColor: color}}  //no need to put color in {{}}
      >
        <div className='fixed bottom-12 inset-x-0 px-2 flex justify-center items-center'>
        {/* just took position here  */}

        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> 
        <button className='outline-none px-4 py-1 rounded-full text-white bg-red-600'
        onClick={() => setColor('red')}
        >Red</button>
        <button className='outline-none px-4 py-1 rounded-full text-white bg-blue-600'
        onClick={() => setColor('blue')}
        >Blue</button>
        <button className='outline-none px-4 py-1 rounded-full text-white bg-yellow-500'
        onClick={() => setColor('yellow')}
        >Yellow</button>
        <button className='outline-none px-4 py-1 rounded-full text-white bg-purple-600'
        onClick={() => setColor('purple')}
        >Purple</button>
        <button className='outline-none px-4 py-1 rounded-full text-white bg-indigo-600'
        onClick={() => setColor('indigo')}
        >Indigo</button>
        <button className='outline-none px-4 py-1 rounded-full text-white bg-pink-600'
        onClick={() => setColor('pink')}
        >Pink</button>
        <button className='outline-none px-4 py-1 rounded-full text-white bg-gray-600'
        onClick={() => setColor('gray')}
        >Gray</button>
        <button className='outline-none px-4 py-1 rounded-full text-white bg-black'
        onClick={() => setColor('black')}
        >Black</button>

        </div>
        </div>
      </div>
    </>
  )
}

export default App