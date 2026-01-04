const axios = require("axios"); 
// function main(){
//     fetch("https://api.github.com/users/ChaitanyaJhindal")
//     .then(async response => {
//         const json = await response.json();
//         console.log(json);
//         console.log(json.followers_url);
//     })
// }
// main();

//  async function main(){
//     const response=await fetch("https://api.github.com/users/ChaitanyaJhindal")
//     const json=await response.json();
//     console.log(json);
//     console.log(json.followers_url);
// }

// main();

// now coming to axios lib , 

async function main(){
    const response = await axios.get("https://api.github.com/users/ChaitanyaJhindal")
    console.log(response.data);
}
main();