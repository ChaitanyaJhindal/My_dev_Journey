import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter";

function App() {
  return (
    <RecoilRoot>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          color: "#ffffff",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "32px" }}>Recoil Counter</h1>
        <Counter />
        <IsEven />
        <Buttons />
      </div>
    </RecoilRoot>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 2);
  }

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <button
        onClick={increase}
        style={{ padding: "10px 16px", fontSize: "16px", cursor: "pointer" }}
      >
        Increase
      </button>
      <button
        onClick={decrease}
        style={{ padding: "10px 16px", fontSize: "16px", cursor: "pointer" }}
      >
        Decrease
      </button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(counterAtom);
  return <div style={{ fontSize: "28px", fontWeight: 700 }}>Count: {count}</div>;
}

function IsEven() {
  const even = useRecoilValue(evenSelector);
  return <div>{even ? "Even" : "Odd"}</div>;
}

export default App;








//C:\Users\Chait\Desktop\Cohort3\week11\customhooks\recoil\Recoil\src\App.jsx

















































// import './App.css'
// import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

// const counterAtom = atom({
//   key: 'counterAtom',
//   default: 0
// });

// function App() {
//   return (
//     <RecoilRoot>
//       <Counter />
//     </RecoilRoot>
//   );
// }

// function Counter() {
//   return (
//     <div>
//       <CurrentCount />
//       <Increase />
//       <Decrease />
//     </div>
//   );
// }

// function CurrentCount() {
//   const count = useRecoilValue(counterAtom);
//   return <div>{count}</div>;
// }

// function Increase() {
//   const setCount = useSetRecoilState(counterAtom);

//   return (
//     <button onClick={() => setCount(c => c + 1)}>
//       Increase
//     </button>
//   );
// }

// function Decrease() {
//   const setCount = useSetRecoilState(counterAtom);

//   return (
//     <button onClick={() => setCount(c => c - 1)}>
//       Decrease
//     </button>
//   );
// }

// export default App;






































































// import './App.css'
// import { useState } from 'react';
// function App() {
// return(
//     <>
//   <Counter/>
//     </>
//   )
// }
// function Counter(){
//    const [count , setCount] = useState(0);
//    return <div>
//     {count}
//     <Increase setCount={setCount}/>
//     <Decrease setCount={setCount}/>
//     </div>
// }
// function Decrease({setCount}){
//   function decrease(){
//     setCount(c => c-1);
//   }
//   return <div>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// }
// function Increase({setCount}){
//   function increase(){
//     setCount(c => c+1);
//   }
//     return <div>
//     <button onClick = {increase}>Increase</button>
//   </div>
// }
// export default App;