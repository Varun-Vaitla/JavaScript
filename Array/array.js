//........................array using new operator
let arr=new Array();
arr[0]=10;
arr[1]=20;
arr[2]=30;
arr[3]=40;
console.log(arr);
//........................array using literal way

let arr1=[10,20,30,40,50];
console.log(arr1);
console.log(arr1[4]);

for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
    
}
//.....................built in methods
//1.push(it is used to add element at the last)
arr.push(50);


console.log(arr);// [10, 20, 30, 40, 50]
//2.pop(this method is used to remove last element from the array)
arr.pop();
console.log(arr); [10, 20, 30, 40]


//3.unShift(this method is used to add the element at the first)
arr.unshift("5");
console.log(arr);// ['5', 10, 20, 30, 40]


//4.shift(this method is used to removr the element at the first position)
arr.shift()
console.log(arr);//[10, 20, 30, 40]

//5.slice(this method is used to fatch the elements based on the array value)
console.log(arr.slice(1,3));
console.log(arr.slice(-4,-2));//[10, 20]

//6.split(this is used to for add the elements and removing the elements from the arr)
//it will accept multiple value as argument 1st is starting value 2nd is count if elements from 3rd new elements to be added
let arr2=[10,20,30,40,50,60];
console.log(arr2);//[10, 20, 30, 40, 50, 60]
console.log(arr2.splice(1,2,100,200,300));
console.log(arr2);//[10, 100, 200, 300, 40, 50, 60]



//7revers(this method is used to tevers the array)
let arr3=[10,20,30,40,50];
console.log(arr3.reverse());//[50, 40, 30, 20, 10]

//8.sort(this method is used to sort the array in ascending order considering elements as string if u want to sort the elements based on the numerical values use callback function)
let arr4=['tarun','varun','karun','arun'];
console.log(arr4.sort());//['arun', 'karun', 'tarun', 'varun']
let arr5=[20,50,40,30,90,40];
console.log(arr5.sort((a,b)=>a-b));//[20, 30, 40, 40, 50, 90]ascending order
console.log(arr5.sort((a,b)=>b-a));// [90, 50, 40, 40, 30, 20]descending order


//9.forEach()
let price=[10,20,30,40,50,,60];
let discount=price.forEach((a)=>{console.log(a+" 50% off");
});
console.log(discount);

//10.map()
let map1=[10,20,30,40,50];
console.log(map1);
let map2=map1.map((a)=>{return a+" 100rs"});
console.log(map2);// ['10 100rs', '20 100rs', '30 100rs', '40 100rs', '50 100rs']

//11.filter()
let filter1=[22,11,33,55,66,77];
let filter2=filter1.filter((ele)=>{return ele>50});
console.log(filter2);// [55, 66, 77]
let filter3=filter1.filter((ele)=>{return ele<60});
console.log(filter3);//[22, 11, 33, 55]

//12.reduce()
let arr6=[10,20,30,40,50,60];
let value1=arr6.reduce((iv,cv)=>{return iv+cv})
console.log(value1);//210
let value2=arr6.reduce((iv,cv)=>{return iv-cv})
console.log(value2);//-190
let value3=arr6.reduce((iv,cv)=>{return iv*cv})
console.log(value3);//-190


//13.join()
let arr7=[10,20,30,40,50]
let res=arr7.join(" ");
console.log(res);
console.log(typeof(res));

let arrr=['varun','arun','tarun']
let joining=arrr.join(" ");
console.log(joining);


//14.some()
let arr8=[15,65,24,35,25]
let some1=arr8.some((ele)=>{return ele>=100})
console.log(some1);//false
let some2=arr8.some((ele)=>{return ele>=20});
console.log(some2);//true

//15.every()
let every1=arr8.every((ele)=>{return ele>=20});
console.log(every1);//false
let every2=arr8.every( (ele)=>{ return ele<100})
console.log(every2);//true

//16.includes()
let arr9=[10,20,30,40,50,60]
console.log(arr.includes(30));//true
console.log(arr.includes(45));//false

let arr10=["abcd","bcde","cdef","defg"]
console.log(arr10.includes("defg"));//true

//17.indexOf()
let arr11=[10,20,30,30,30,40,40]
console.log(arr11.indexOf(30));//2

//18.lastIndexOf()
console.log(arr11.lastIndexOf(30));//4

//19.concat()
let one=[10,20,30,40,50]
let two=['are','you','hii']
console.log(one.concat(two));//[10, 20, 30, 40, 50, 'are', 'you', 'hii']




























