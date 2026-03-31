import { use, useRef, useState } from 'react';
import './App.css';
import { usePrev } from "./hooks/useprev.js";
function useDebounce(orginalfn){
    const currentClock = useRef();
    const fn = ()=> {
        clearTimeout(currentClock.current);
        currentClock.current=setTimeout(originalfn, 20);
    }
    return fn ;
}
function App() {
    function senddatabacktobk(){
        console.log("Data sent to bk ");
    }
    const debouncefn =useDebounce(senddatabacktobk)
    return(
        <div>
            <input type = "text" onChange={debouncefn}></>
        </div>
    );
}

export default App;





















































































// import { useState } from 'react';
// import './App.css';
// import { usePrev } from "./hooks/useprev.js";

// function App() {
//     const [state,setState]= useState(0)
//     const prev = usePrev(state)
//     return (
//         <div>
//         <p>{state}</p>
//         <button onClick={()=>

//             {
//                 setState((curr)=> curr+1);
//             }
 
//         }>CLick me to increase the counter</button>
//         <p>Previous: {prev}</p>
//         </div>
        
//     );
// }

// export default App;














































































// import './App.css';
// import { useFetch, usePost } from "./hooks/usefetch";

// function App() {
//   const { finalData , loading} = usePost("https://jsonplaceholder.typicode.com/todos/1");
//  if(loading){
//   return <div>
//     Loading ......
//   </div>
//  }
//   return (
//     <div>
//     {JSON.stringify(finalData)}
//     </div>
//   );
// }

// export default App;

































































































// import { useState } from "react";
// import './App.css';

// function useCounter() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount(count + 1);
//     // better version:
//     // setCount(c => c + 1);
//   }

//   return {
//     count: count,
//     increaseCount: increaseCount
//   };
// }
// function App() {
//   return (
//     <div>
//       <Counter />
//       <Counter />
//       <Counter />
//       <Counter />
//       <Counter />
//       <Counter />
//     </div>
//   );
// }
// function Counter() {
//   const { count, increaseCount } = useCounter();

//   return (
//     <div>
//       <button onClick={increaseCount}>
//         Increase {count}
//       </button>
//     </div>
//   );
// }

// export default App;






















































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