const button=document.querySelector("#theme");
const body=document.querySelector("body")
let flag=0;
button.addEventListener("click",function () {
    if(flag === 0){
    document.body.style.backgroundColor = "black";
    document.body.style.color="white"
    flag=1;
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        flag=0;
    }
});