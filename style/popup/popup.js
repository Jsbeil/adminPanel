
function closeBg(){
    let bGpopup = document.getElementById("bg-popup");
    bGpopup.classList.add('disable');
    deletClassNone();
}
function openBg(){
    let container = document.getElementById("container-gl");
    container.classList.add('active');
}
function closePopup(){
    let popup = document.getElementById("popupActive")
    popup.classList.remove('active');
    setTimeout(closeBg,1000);
    setTimeout(openBg,1000);
}

function openPopupCreate(){
    let createpopup = document.getElementById("createpopup");
    createpopup.classList.toggle('active');
}
function closePopupCreate(){
    let removecreatepopup = document.getElementById("createpopup");
    removecreatepopup.classList.remove('active');
}
function selectionColorOpen(){
    let selectioncolor = document.getElementById("createpopup");
    selectioncolor.classList.toggle('open');
    setTimeout(function(){
        let selectionColor = document.getElementById("selection-color");
        selectionColor.classList.toggle("none");
    },100)
}