function solution(nums, k) {
    if(nums.length <= 0){
        return false
    }

    let minorDiff = null

    for(let i = 0; i<nums.length ; i++){
        let inum = nums[i]
        for(let j = 0 ; j<nums.length ; j++){
            let jnum = nums[j]
            if(i !== j && inum == jnum){
   
                diff = Math.abs(i - j)
                if(minorDiff == null){
                    minorDiff = diff
                }else{
                    if(diff < minorDiff){
                        minorDiff = diff
                    }
                }
            }
        }
    }

    if(minorDiff !== null && minorDiff <= k){
        return true
    }else{
        return false
    }
}
nums= [1,2]
k= 2

console.log(solution(nums,k))