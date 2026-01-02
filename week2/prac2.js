function sum(n){
    let ans =0; 
    for (let i =0 ; i<=n; i++){
        ans += i;
    }
    return ans;
}
const ans = sum(10);
console.log(ans);