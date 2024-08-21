import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('')
  const[userValue,setUserValue]=useState('')

  return (
    <>
    <div className=' container d-flex justify-content-center align-items-center m-5 bg-primary '>
      <div className='inner-box m-5 d-flex justify-content-center align-items-center'style={{width:'500px',height:'500px',backgroundColor:color,border:'solid 2px'}}>
        <h1>{userValue}</h1>
      </div>
      <div className='buttons'>
        <button id='rred' className='btn  ms-5' onClick={()=>{setColor('red').setUserValue('RED')}}>RED</button>
        <button id='ggren' className='btn  ms-5' onClick={()=>{setColor('green').setUserValue('GREEN')}}>GREEN</button>
        <button id='bblue' className='btn  ms-5'onClick={()=>{setColor('blue').setUserValue('BLUE')}}>BLUE</button>
        <button id='wwhite' className='btn  ms-5'onClick={()=>{setColor('white').setUserValue('WHITE')}}>WHITE</button>

      </div>

    </div>

    </>
  )
}

export default App
