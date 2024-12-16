import { useState } from 'react'
import './App.css'
import usePing from './hooks/apis/queries/usePing'
import { PingComponent } from './components/atoms/pingComponent.';

function App() {

  const[isVisible,setIsVisible] = useState(false);
  return(
    <>
      <button onClick={()=> setIsVisible(!isVisible)}>TOGGLE</button>
      {isVisible && <PingComponent/>}
    </>
  )

}

export default App
