let str1="hi hello every one how are you all one";
let str2="LETS start class today";
let str3="can any one tell what is string";
let str4="this$is$a$sample$string"
let str5="   there is space before and aftre   "
let str6="repeat ";
//..................concat()
console.log(str1.concat(str2));//hi hello every one how are youLETS start class today
console.log(str1.concat(" ",str2));//hi hello every one how are you LETS start class today
console.log(str1.concat(" ",str2," ",str3));//hi hello every one how are you LETS start class today can any one tell what is string

//......................length
console.log(str1.length);//30

//......................toUpperCase
console.log(str1.toUpperCase());//HI HELLO EVERY ONE HOW ARE YOU

//......................toLowerCase
console.log(str2.toLowerCase());//lets start class today

//......................charAt
console.log(str3.charAt(4));//a

//.......................charCodeAt
console.log(str3.charCodeAt(4));//97

//......................slice
console.log(str1.slice(0,10));//hi hello e

//......................split
console.log(str1.split(" "));//['hi', 'hello', 'every', 'one', 'how', 'are', 'you']
console.log(str4.split("$"));// ['this', 'is', 'a', 'sample', 'string']

//.......................substring
console.log(str1.substring(3,7));//hell
console.log(str1.substring(3,8));//hello

//...........................substr
console.log(str1.substr(3,2));//he

//................trim(),trimStart(),trimEnd()
console.log(str5);//__there is space before and aftre__ 
console.log(str5.trim());//there is space before and aftre
console.log(str5.trimStart());//there is space before and aftre__   
console.log(str5.trimEnd());// __there is space before and aftre

//..............startsWith(),endWith()
console.log(str1.startsWith("hi"));//true
console.log(str1.startsWith("hello"));//

console.log(str1.endsWith("you"));//true
console.log(str1.endsWith("are"));//false

//...............padStart(),padEnd()
console.log(str1.length)//30
console.log(str1.padStart(35,"fill"));//fillfhi hello every one how are you

console.log(str1.padEnd(35,"fill"));//hi hello every one how are youfillf

//...................includes()
console.log(str1.includes("one"));//true
console.log(str1.includes("varun"));//false

//...........indexOf
console.log(str1.indexOf("a"));//23
console.log(str1.indexOf("z"));//-1
console.log(str1.indexOf("one"));//15
console.log(str1.indexOf("oe"));//-1

//............lastIndexOf
console.log(str1.lastIndexOf("a"));//31
console.log(str1.lastIndexOf("z"));//-1
console.log(str1.lastIndexOf("one"));//35
console.log(str1.lastIndexOf("oe"));//-1

//.................replace(),repaceAll()
console.log(str2.replace("a","%"));//LETS st%rt class today
console.log(str2.replaceAll("a","%"));//LETS st%rt cl%ss tod%y
console.log(str1.replace("one","1"));//hi hello every 1 how are you all one
console.log(str1.replaceAll("one","1"));//hi hello every 1 how are you all 1

//.............search()
console.log(str1.search("one"));//15

//...........re
console.log(str6.repeat(3));//repeat repeat repeat 












