import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('pink')
  


  return (
    <>
      
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>


       <div className=' fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2'>

        <div className='flex flex-wrap justify-center gap-3 shadow-l bg-white px-3 py-2 rounded-3xl'>
          <button className=' h-10 rounded-full ' style={{backgroundColor:'green'}} onClick={() => 
            
            setColor('green')}> green</button>
          <button className=' h-10 rounded-full ' style={{backgroundColor:'blue'}} onClick={() => setColor('blue')}>blue</button>
           <button className=' h-10 rounded-full  ' style={{backgroundColor:'yellow'}} onClick={() => setColor('yellow')}>yellow</button>
          

        </div>


        

       </div>
      </div>
     
      
    </>
  )
}

export default App
