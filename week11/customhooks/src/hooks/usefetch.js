import { useState, useEffect } from "react";
export function usePost(url){
    const [finalData,setFinalData]=useState({});
    const [loading , setLoading] = useState(true);
    async function getDetails(){
        setLoading(true)
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        await delay(4000); // 2 seconds
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json) ; 
        setLoading(false);
    }
    useEffect(()=>{
        getDetails();
    },[])
    return {
        finalData,
        loading
    }
}
export function useFetch() {
  const [post, setPost] = useState({});

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return post.title;
}