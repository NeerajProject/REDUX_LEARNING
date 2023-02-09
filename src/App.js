import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/index';
function App() {
  const counter = useSelector((state)=>state.counter)
  const   dispatch = useDispatch()
  const increment = ()=>{
    dispatch(actions.increment())

  }
  const decrement =()=>{
    
  
    dispatch(actions.decrement())
  }

  const addvalue=()=>{
    dispatch(actions.addBy(20))
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
