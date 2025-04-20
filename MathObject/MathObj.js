//................MathObject

let  a=10;
let b=5;
console.log(Math.PI);//3.141592653589793
console.log(Math.sqrt(a));//3.1622776601683795
console.log(Math.sqrt(25));//5
console.log(Math.cbrt(27));//3
console.log(Math.sign(0));//0
console.log(Math.cos(1));//0.5403023058681398
console.log(parseInt(Math.random()*10000));//4719

//otp program

let otp=Number(parseInt(Math.random()*10000));
console.log(otp);

let varify=Number(prompt("enter the otp"));
if(otp==varify)
{
    console.log("login successfull");
    
}
else{
    console.log("invalid otp");
    
}




