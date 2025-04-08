const container = document.getElementById("colorBox");
const squares = document.querySelectorAll(".square");
squares.forEach(squares=>{
    squares.addEventListener("click",function(){
        const color = window.getComputedStyle(this).backgroundColor;
        container.style.backgroundColor = color;
    });
});