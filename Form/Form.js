let fname=document.querySelector("#fname")
let email=document.querySelector("#email")
let pas=document.querySelector("#pas")
let cpas=document.querySelector("#Cpass")

let fnameerror=document.querySelector("#fnameerror")
let emailerror=document.querySelector("#emailerror")
let Passerror=document.querySelector("#Passerror")
let Cpasserror=document.querySelector("#Cpasserror")

let btn=document.querySelector("#btn")

btn.addEventListener("click",(e)=>{
    e.preventDefault();

    if(fname.value.trim().length==0)
    {
        fnameerror.innerText="please enter the first name"
    }
    if(email.value.trim().length==0)
    {
        emailerror.innerText="please enter the email"
        emailerror.style.color="red"
    }
    if(pas.value.trim().length==0)
    {
        Passerror.innerText="enter the passsword"
        Passerror.style.color="red"
    }
    if(cpas.value.trim().length==0)
    {
        Cpasserror.innerText="enter the confirm password"
        Cpasserror.style.color="red"
    }
    else if(pas.value.trim().length<8)
    {
        Passerror.innerText="password  should be of 8 characters"
        Passerror.style.color="red"
    }
    if(pas.value!==cpas.value)
    {
        Cpasserror.innerText="invalid password"
    }
    if(fname.value.trim().length>0&&email.value.trim().length>0&&pas.value===cpas.value)
    {
        alert("succesfull")
    }
})
