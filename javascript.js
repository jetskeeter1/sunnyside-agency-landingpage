const buttonTog = document.getElementById("drop-button");
const navi = document.getElementById("navbar");

buttonTog.addEventListener("mousedown", ()=>{

    navi.classList.toggle("open");

});