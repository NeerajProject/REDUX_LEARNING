import './App.css';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const counter = useSelector((state)=>state.counter)
  const   dispatch = useDispatch()
  const increment = ()=>{
    dispatch({type :'INC'})

  }
  const decrement =()=>{
    
  
    dispatch({type : 'DIC'})
  }

  const addvalue=()=>{
    dispatch({type: "ADD10"})
  }
  return (
    <div className="App">
      <h1>Counter APP</h1>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
     
    <button onClick={decrement}>decrement</button>
    <button onClick={addvalue}>Add 10</button>

    </div>
  );
}

export default App;
