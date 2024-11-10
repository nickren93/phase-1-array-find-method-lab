// code your solution here

function superbowlWin(array){
    function win(element){
        return element.result === "W"
    }if (array.find(win) === undefined) {
        return undefined
    }else {
        return array.find(win).year
    }
    
}

console.log(superbowlWin(record))

