let str=`varun`;
let res=``;
for(let i=str.length-1;i>=0;i--)
{
    res=res+str.charAt(i);
}
console.log(res);
//....................................
let str1='mom';
let res1='';
for(let i=str1.length-1;i>=0;i--)
{
    res1=res1+str.charAt(i);
}
if(res1==str1)
{
    console.log('palindrom');
    
}
else{
    console.log('not a palindrom');
    
}

