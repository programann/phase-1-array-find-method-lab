// code your solution here
function superbowlWin(arr){

   let ans =  arr.find((record) => {
        if(record.result === "W"){
            return record.year
        }
    })

    return ans ? ans.year: undefined

    
}



// record.find(superBowlWin)
