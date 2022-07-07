//Body arka planı rengini değiştir.
//1.Renk butonlarına oninput metodu atanabilir yada renk butonları event atanabilir.
//Atanan event ile body arka planı canlı olarak değiştirilebilir.

let color1=document.querySelector(".color1");
let color2=document.querySelector(".color2");
let body=document.querySelector("#myBody");
let text=document.querySelector("#gradient")
//console.log(color1, color2, body);
text.innerHTML= "linear-gradient(to right, rgb(255,0,0) ,rgb(255,255,0))"


function myFunction(){
    body.style.background= "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value +")";
    text.innerHTML=body.style.background;
}

color1.addEventListener("input", myFunction);

color2.addEventListener("input", myFunction);