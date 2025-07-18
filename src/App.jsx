import { useState } from 'react'
import './App.css'
import Decrease from './components/Decrease'
import Display from './components/Display'
import Increase from './components/Increase'
import Reset from './components/Reset'

function App() {
  // create a state using a use state hook
  // count - is our variable that contains the initial value
  // setCount - a function used to update our state which is "count"
  const [count, setCount] = useState("initial text");
return (
    <> 
      <h1>App Component</h1>
      <p>this is a paragraph</p>

      {/* <Display /> */}

      <h1>{ count }</h1>

      <Decrease 
        onDecreaseClicked={
          () => setCount((prevCount) => prevCount - 1)
        }  
      />
      <Increase 
        onIncreaseClicked={
          () => setCount((prevCount) => prevCount + 1)
        } 
      />
      <Reset onResetClicked={() => setCount(0)} />
{/* 
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>

      <button onClick={() => setCount((prev) => prev + 1)}>+</button>

      <button onClick={() => setCount(0)}>Reset</button> */}
    </>
  )
}

export default App