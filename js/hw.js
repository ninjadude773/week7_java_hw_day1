

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["MaS","HAS","PuRple","eyes"]

function findWords(){
    let x = dog_names.length
    for(let i = 0; i < dog_names.length; i++){
        if( dog_string.indexOf(dog_names[i]) > -1){
        return "Matched " + dog_names[i] 
        } else {
            x = x - 1
        }
    }if (x == 0){
        return 'No Matches'
    }
}

console.log(findWords())

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let array = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceNums(array){
    for(let i = 0; i < array.length; i++){
        if(i % 2 == 0){
            array.splice(i,1,'even index')
        }
    }
    return array
}
console.log(replaceNums(array))


//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]