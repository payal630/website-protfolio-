const words=["Frontend Developer",
"Web Designer",
"JavaScript Developer"];

let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

document.getElementById("typing").textContent=
current.substring(0,j);

if(!isDeleting){

j++;

if(j>current.length){

isDeleting=true;

setTimeout(type,1000);

return;

}

}else{

j--;

if(j==0){

isDeleting=false;

i++;

if(i==words.length)i=0;

}

}

setTimeout(type,isDeleting?70:120);

}

type();


const counter=document.querySelectorAll("[data-count]");

counter.forEach(item=>{

let update=()=>{

let target=+item.dataset.count;

let count=+item.innerText;

let speed=target/100;

if(count<target){

item.innerText=Math.ceil(count+speed);

setTimeout(update,20);

}

}

update();

});

const mode = document.getElementById("mode");

if(mode){
    mode.onclick = () => {
        document.body.classList.toggle("dark");
    };
}

const form = document.getElementById("form");

if(form){
    form.onsubmit = (e) => {
        e.preventDefault();
        alert("Message Sent Successfully!");
    };
}



const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

menu.classList.toggle("active");

if(menu.classList.contains("active")){

menuBtn.innerHTML='<i class="fas fa-times"></i>';

}else{

menuBtn.innerHTML='<i class="fas fa-bars"></i>';

}

});

// Close menu when link clicked

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("active");
menuBtn.innerHTML='<i class="fas fa-bars"></i>';

});

});
