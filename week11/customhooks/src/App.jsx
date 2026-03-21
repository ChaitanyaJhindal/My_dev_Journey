import { useState } from "react";
import './App.css';

function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
    // better version:
    // setCount(c => c + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount
  };
}
function App() {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
function Counter() {
  const { count, increaseCount } = useCounter();

  return (
    <div>
      <button onClick={increaseCount}>
        Increase {count}
      </button>
    </div>
  );
}

export default App;






















































// import { useState } from "react";
// import './App.css'
// // Now making a custom hook for the counter variable 
// function useCounter() {
//   const [count, setCount] = useState(0);
//   function increaseCount() {
//     setCount(count + 1);
//   }
//   return {
//     count: count,
//     increaseCount: increaseCount
//   };
// }

// function Counter(){
//   const {count , increaseCount} =useCounter();
//   return <div>
//     <button onClick ={increaseCount}>Increase {count}</button>
//   </div>
// }
// function App() {
//   return (
//   <div>
//   <Counter />
//   <Counter />
//   <Counter />
//   <Counter />

//   </div>
//   )


// // Something obv . every couter has it's own state variable and it is independent of the other one 
// }
// export default App  