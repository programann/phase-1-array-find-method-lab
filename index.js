// code your solution here
function superbowlWin(arr){

   let ans =  arr.find((el) => {
        if(el.result === "W"){
            return el.year
        }
    })

    return ans ? ans.year : undefined

    
}



// record.find(superBowlWin)
