function coinChange(coins, target){
    const dp = new Array(target+1).fill(target+1)
    dp[0] = 0
    for (let i=0;i< target+1;i++){
        for(let c of coins){
            if(i-c >= 0){
                console.log("hahah")
                dp[i] = Math.min(dp[i], 1+ dp[i-c])
            }
        }
    }

    return dp[target] > target ? -1 : dp[target]
}

console.log(coinChange([1,3,5,7], 10))