const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");
openBtn.onclick=function(){
    modal.style.display="block";

} 
window.onclick=function(){
    modal.style.display="none"
}
window.onclick=function(event){
    if(event.target===modal){
        modal.style.display="none";
    }
}