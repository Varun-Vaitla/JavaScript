//function
//1....................anonymous function
let a=function()// we cannot execute anonymous function directly to execute anonymous function we  should take the help of other function 1.named function 2,function with expression 3.IIfe
{
console.log("i am anonymous function");
}
()
console.log(a);

//2.....................named Function
function add()
{
    console.log("this is named function");
    
}
add();
//3.....................function with expression
let b=function()
{
    console.log("this is function with expression");
    
}
b();
//4....................first class function
let c=function()
{
    console.log("this is first class function");
    
}
c();
//5.......................arrow funtion
let d=()=>{
    console.log("this is an arrow function");
    
}
d();
//6..............callback function
//7...............Higher order function
function hof(callback)//hof()
{
    callback();
console.log("i am higher order function");
callback();

}
hof(callback)
function callback()//caallback()
{
    console.log("i am call back function");
    
}
//8...................nested function
let z=0;
function outer()
{
    console.log(z);
    
    let a=10;
    function inner()
    {
        console.log(a);
        let b=20;
        function innermost()
        {
           console.log("inner most function");

        }
        innermost()
        console.log("inner function");
        

    }
    inner()
    console.log("outer function");
    console.log(a);
    
    
}
outer()
//9..........................IIFe
(function(){
console.log("it is ahigher order function")
})()