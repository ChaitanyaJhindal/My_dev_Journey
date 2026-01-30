// import { useState } from "react";

// const cardStyle = {
//   width: 300,
//   backgroundColor: "white",
//   borderRadius: 50,
//   border: "1px solid #ccc",
//   padding: 20,
//   margin: 10,
// };

// function PostComponent({ name, subtitle, time, image, description }) {
//   return (
//     <div style={cardStyle}>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <img
//           src={image}
//           alt="profile"
//           style={{ width: 40, height: 40, borderRadius: "50%" }}
//         />

//         <div style={{ fontSize: 14, marginLeft: 10 }}>
//           <b>{name}</b>
//           <div>{subtitle}</div>
//           {time && <div>🕒 {time}</div>}
//         </div>
//       </div>

//       <div style={{ fontSize: 14, marginTop: 10 }}>
//         {description}
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [posts, setPosts] = useState([]);

//   function addPost() {
//     setPosts([
//       ...posts,
//       {
//         name: "Chaitanya",
//         subtitle: "1000 followers",
//         time: "96m ago",
//         image:
//           "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
//         description: "Hey, I am interested in finding new jobs",
//       },
//     ]);
//   }

//   return (
//     <div style={{ background: "#217ea5", minHeight: "100vh", padding: 20 }}>
//       <button onClick={addPost}>Add post</button>

//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div>
//           {posts.map((post, index) => (
//             <PostComponent
//               key={index}
//               name={post.name}
//               subtitle={post.subtitle}
//               time={post.time}
//               image={post.image}
//               description={post.description}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// ...existing code...
import { useState, useEffect } from "react";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setShowTimer((currentValue) => !currentValue);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {showTimer && <Timer />}
    </div>
  );
}

const Timer = function () {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("from inside clock");
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <div>{seconds} seconds elapsed</div>;
};

export default App;
// ...existing code...

























































// function App() {
//   const [currentTab, setCurrentTab] = useState();

//   useEffect(() => {
//     console.log("data is being fetched");

//     fetch("https://jsonplaceholder.typicode.com/todos/1")
//       .then(response => response.json())
//       .then(json => {
//         console.log(json);
//         console.log("data is fetched");
//       });
//   }, [currentTab]); // runs only once after first render

//   return (
//     <div>
//       <button
//         onClick={() => setCurrentTab("feed")}
//         style={{ color: currentTab === "feed" ? "red" : "black" }}
//       >
//         feed
//       </button>

//       <button
//         onClick={() => setCurrentTab("notification")}
//         style={{ color: currentTab === "notification" ? "red" : "black" }}
//       >
//         Notification
//       </button>

//       <button
//         onClick={() => setCurrentTab("messages")}
//         style={{ color: currentTab === "messages" ? "red" : "black" }}
//       >
//         messages
//       </button>

//       <button
//         onClick={() => setCurrentTab("jobs")}
//         style={{ color: currentTab === "jobs" ? "red" : "black" }}
//       >
//         Jobs
//       </button>
//     </div>
//   );
// }

// export default App;















































// function App() {
//   const [count, setCount] = useState(1);

//   function increaseCount() {
//     setCount(function(currentValue){
//       return currentValue +1;
//     });
//   }
//   useEffect(function(){
//     console.log("above setinterval");
//     console.log("The count has been Updated to " + count); 
//     setInterval(increaseCount,1000);
//   },[count]) 

//   return (
//     <div>
//       <div style={{ display: "flex" }}>
//         <div
//           style={{
//             background: "red",
//             borderRadius: 20,
//             width: 20,
//             height: 25,
//             paddingLeft: 10,
//             paddingTop: 5,
//             color: "white"
//           }}
//         >
//           {count}
//         </div>
//       </div>

//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7PN5_q1K36c2NyQBFLAk8XBYmeaWzJBAOUw&s"
//         width={40}
//         style={{ cursor: "pointer" }}
//         onClick={increaseCount}
//       />

//       <button onClick={increaseCount}>
//         Increase The Count
//       </button>
//     </div>
//   );
// }

// export default App;
