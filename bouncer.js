var age = -25

if (age < 0) {
    console.log("error! This doesn't make sense");
}

else {
    console.log("Nope");
}

if (age == 21) {
    console.log("Happy 21st birthday!!");
}

else {
    console.log("Nope");
}

if ((age % 2) != 0) {
    console.log("Your age is odd!");
}

else {
    console.log("Nope");
}

if (age % Math.sqrt(age) === 0) {
    console.log("perfect square!");
}

else {
    console.log("Nope");
}