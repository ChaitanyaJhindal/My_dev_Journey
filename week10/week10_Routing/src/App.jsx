// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//     <Link to ="/">Allen</Link>
//     <Link to ="/neet/online-coaching-class1-11">Class11</Link>
//     <Link to ="/neet/online-coaching-class1-12">Class12</Link>
//       <Routes>
//         <Route path="/" element={<Layout/>} />
//         <Route path="/" element={<Landing />} />
//         <Route path="/neet/online-coaching-class1-11" element={<Class11Program />} />
//         <Route path="/neet/online-coaching-class1-12" element={<Class12Program />} />
//         <Route path="*" element ={<ErrorPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function Layout() {
//   return <div style ={{height: "100vh"}}>
//     <Header/>
//     <div style={{height: "90vh"}}>
//       <Outlet />
//   </div>
//   footer
//   </div>
// }

// function ErrorPage(){
//   return <div>
//     Sorry Go to the correct route 
//   </div>
// }
// function Landing() {
//   return <div>Welcome to Landing Page</div>;
// }

// function Class11Program() {
//   return <div>Welcome to Class 11 Programs</div>;
// }

// function Class12Program() {
//   return <div>Welcome to Class 12 Programs</div>;
// }

// export default App;






// import './App.css'
//  function App(){
//   function focusOnInput(){
//     document.getElementById("name").focus()
//   }
//    return <div>
//   Sign Up 
//   <input id ="name" type ={"text"}></input>
//   <input type ={"text"}></input>
//   <button onClick={focusOnInput}>Submit</button>
//  </div>
//  }

//  export default App



// import { useRef } from 'react'
// import './App.css'

// function App() {
//   const inputRef = useRef();

//   function focusOnInput() {
//     inputRef.current.focus();
//   }

//   return (
//     <div>
//       Sign Up
//       <input ref={inputRef}  type="password" />
//       <input type="text" />
//       <button onClick={focusOnInput}>Submit</button>
//     </div>
//   );
// }

// export default App;


import { useState, useContext, createContext } from 'react'
import './App.css'

const bulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <div>
      <bulbContext.Provider value={{ bulbOn, setBulbOn }}>
        <Lightbulb />
      </bulbContext.Provider>
    </div>
  );
}

function Lightbulb() {
  const { bulbOn, setBulbOn } = useContext(bulbContext);

  return (
    <div>
      <BulbState bulbon={bulbOn} />
      <Togglebulbstate setbulbon={setBulbOn} />
    </div>
  );
}

function BulbState({ bulbon }) {
  return (
    <div>
      {bulbon ? "Bulb On 💡" : "Bulb Off 🌑"}
    </div>
  );
}

function Togglebulbstate({ setbulbon }) {
  function toggle() {
    setbulbon(currentState => !currentState);
  }

  return (
    <div>
      <button onClick={toggle}>Switch</button>
    </div>
  );
}

export default App;
