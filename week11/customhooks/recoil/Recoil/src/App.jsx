import './App.css'
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

const counterAtom = atom({
  key: 'counterAtom',
  default: 0
});

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Increase
    </button>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);

  return (
    <button onClick={() => setCount(c => c - 1)}>
      Decrease
    </button>
  );
}

export default App;






































































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