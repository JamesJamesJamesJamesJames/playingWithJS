// write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order(don't actually reverse the array itself)
colors = ["blue", "red", "yellow"]

function printReverse(array){
    for(var i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}

// write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical

numbers = [1, 1, 1, 1, 1, 1]
letters = ["a", "b", "a", "a"]

function isUniform(arr){
var first = arr[0]
for(var i = 1; i < arr.length; i++){
    if(arr[i] !== first){
        return false;
    }
}
return true;
}

// Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array

function sumArray(){
    var total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total;
}

// Write a function max() that accepts an array of numbers and returns the maximum number in the array

function max(){
    var max = arr[1]
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}