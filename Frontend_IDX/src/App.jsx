import './App.css'
import usePing from './hooks/apis/queries/usePing'

function App() {

  const {isLoading , data} = usePing();

  if(isLoading){
    return(
      <>
        LOADING...... 
      </>
    )
  }
  return (
    <>
      HELLO {data.message}
    </>
  )
}

export default App
