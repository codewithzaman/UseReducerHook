import { useReducer} from 'react';
import './App.css';
const initialstate = 0;
function reducer (state,action){
switch(action.type){
  case "Increment":
    return state+5
  case "Decrement":
    return state-6
    default :
    return state
}
}
function App() {
  const [count, dispatch] = useReducer(reducer,initialstate);
  function increment (){
    dispatch({type:'Increment'})
  }
  function decrement (){
    dispatch({type:'Decrement'})
  }
  return (
    <div className="App">
    <button onClick={increment}>Increment</button>
    <span>{count}</span>
    <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
