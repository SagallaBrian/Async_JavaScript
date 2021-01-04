// The console logging is to show that it is Asynchronous in nature 
console.log("Console 1");
console.log("Console 2");

// A callback is a function passed as an argument to another function
function thecallback() {
    console.log("Fired After 3 Seconds");
}

setTimeout(thecallback, 3000);


console.log("Console 3");
console.log("Console 4");


// The below example is a synchronous callback, as it is executed immediately.
function howtoday() {
    console.log("How are you doing today")
}

function mainfunct1(callbaack) {
    callbaack();
}

mainfunct1(howtoday);

console.log("Console 5");
console.log("Console 6");

function greeting(name) {
    console.log('Hello ' + name);
}

function mainfunct2(callback2) {
    let usa_name = 'Brian';
    callback2(usa_name);
}

mainfunct2(greeting);



function myDisplayer(sumation) {
    console.log('Sum =  ' + sumation);
}

function mainfunct3(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

mainfunct3(5, 5, myDisplayer);
