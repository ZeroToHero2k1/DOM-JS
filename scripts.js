let a=document.getElementsByTagName("li");

console.log(a);



document.querySelector("#agree").addEventListener("click",function(){
    a[2].innerHTML="Hello các con vợ";
});

let b=document.querySelectorAll("li");
console.log(b);