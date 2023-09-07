var name = "Alisha";

var myNumber = 22;

//variables can change as we will see

const port = 3000;
//things that dont change in your program are constants / const 

var car = {
    make:"Audi",
    model:"S5",
    year: 2023
}
//an object variable is defined by a bracket, an obkect has properties inside of them 

function addTwo(someNumber){
    return someNumber + 2;
}
//function of methods (called different but are the same thing)
//this specific funciton will return a value 

function outputSomething(output){
    console.log("You wrote: " + output);
}
//functions that perform a task 

outputSomething("Write something here... I'm having fun!! with node");

var result = addTwo(10);
outputSomething(result); 

outputSomething(addTwo(10));
//they both give the same result but those are two different ways we can do it.

console.log("Hello class!");

console.log(car);

outputSomething(car.make);
//access an objects property with "."

console.log("My name is " +  name + " my favorite number is " + myNumber);

console.log(name + myNumber); // if we want to have a space we need to add a + " " so there is space in between the int
console.log(myNumber + myNumber); //this is a math operation 22+22 = 44
console.log(myNumber + "22"); //it unites the strings it does not make a math operation so it will just add the numbers next to each other  22+22 = 2222