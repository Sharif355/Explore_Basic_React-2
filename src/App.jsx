
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  
  function handleClick (){
    alert('button clicked');
  }

const handleClick2 = ()=>{
  alert('button clicked 2')
}

const addToFive = (num)=>{
  alert(num +5);
}

  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      {/* Using onClick */}
      <button onClick={handleClick} >Click Me</button>
      <button onClick={handleClick2} >Click2</button>
      {/* Using Arrow Function within onclick */}
      <button onClick={()=>{
        alert('third clicked')
      }} >Click3</button>
      {/* If function have a param */}
      <button onClick={()=>addToFive(3)} >Four</button>
      
    </>
  )
}

export default App
