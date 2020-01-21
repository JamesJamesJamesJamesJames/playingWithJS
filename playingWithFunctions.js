// Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise

function isEven(num){
    if(num % 2 === 0){
        return true;
    }
    return false;
}

// write a function factorial() which takes a single numeric argument and returns the factorial of that number

function factorial(num){
    result = 1;
    for(var i = 2; i <= num; i++){
         result *= i;
    }
    return result;
}

// write a function kebabToSnake() which takes a single kababe-cased string argument and returns the snake_cased version

function kebabToSnake(str){
   return str.replace(/-/g,"_");
}