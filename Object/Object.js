//object is used to store properties of real world entity in the form of key value pair
//object is non-primitive datatype
//object is mutable we can change the values

//object can be created in 3 ways

//1.literal way
let student={
    name:"amith",
    age:10,
    class:4
}
console.log(student);

//2.object constructor
let employee=new Object();
employee.name="sagar";
employee.age=24;
employee.id=101;
console.log(employee);

//3.function constructor
function product(name,quantity)
{
this.name=name;
this.quantity=quantity;
}
let product1=new product("pen",5);
let product2=new product("book",10);

console.log(product1);
console.log(product2);

//built-in methods

let emp=new Object();
emp.name="varun";
emp.age=24;
emp.id=101;
emp.salary=50000;
console.log(emp);//before update

emp.name="Mohan";
emp.age=25;
emp.id=101;
emp.salary=50000;//

console.log(emp);//after update{name: 'Mohan', age: 25, id: 101,

//1.Object.freeze
console.log(Object.freeze(emp));//object has been freeze
emp.name="sandhya";
console.log(emp);//{name: 'Mohan', age: 25, id: 101, salary: 50000} value not updated 

//2.Object.is
console.log(Object.isFrozen(emp));//true


let stud=new Object();
stud.name="varun";
stud.id=101;
stud.class="fifth"; 
console.log(stud);//{name: 'varun', id: 101, class: 'fifth'}

//3.Object.isSealed()
console.log(Object.isSealed(stud));//false

//4.Object.seal()this method will not allow to enter new properties or delete the existing properties from the object but you can change the values
// Object.seal(stud);
stud.marks=100;//{name: 'varun', id: 101, class: 'fifth'}new properties will not allow
console.log(Object.isSealed());//true

//5.Object.values
console.log(Object.values(stud));// ['varun', 101, 'fifth', 100]

//6.Object.key
console.log(Object.keys(stud));//['name', 'id', 'class', 'marks']

//7.object.entries()
console.log(Object.entries(stud));//[Array(2), Array(2), Array(2), Array(2)]
// ['name', 'varun'] ['id', 101]....

let std1={
    name:"arjun",
    age:24,
    marks:60
}
let std2={
    name:"darshan",
    age:18,
    marks:90
}

//8.object.assign()
console.log(std1);//{name: 'arjun', age: 24, marks: 60}
console.log(Object.assign(std1,std2));//{name: 'darshan', age: 18, marks: 90}

//9.
let books=[
    {name:"vidhya",price:40,pages:300},
    {name:"Class",price:50,pages:100},
    {name:"laxmi",price:100,pages:200},
    {name:"balaji",price:20,pages:150}]

    function pick({pages})
    {
      return pages>=150?"king size":"smallsize";
    }
    let res=Object.groupBy(books,pick);
    console.log(res);//{king size: Array(3), smallsize: Array(1)}





//...................destructring
let details={
    name:"varun",
    age:25,
    phno:73489,
    address:{
            place:"venki",
            city:"davg",
            state:"karnataka"
            }
}
console.log(details);
console.log(details.name);
console.log(details.address);
console.log(details.address.state);

let {name,age,phno,address}=details;
console.log(address);
console.log(address.place);





  
  