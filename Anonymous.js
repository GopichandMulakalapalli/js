var x=function() {
    console.log("12345678909876543");
};

x();

function fn(myFun){
    console.log("Anonymous as a Function");
    console.log(myFun);
}
fn(function() {
    console.log("I am Anonymous");
});