
function AddClassCircle(){
    let circles = document.getElementById("circle");
    circles.classList.toggle("active");
    let body = document.getElementById("body");
    body.classList.toggle("active")
}
function deletClassNone(){
    let changeColor = document.getElementById("changeColor");
    changeColor.classList.remove("none");
}