
function closeBg(){
    let bGpopup = document.getElementById("bg-popup");
    bGpopup.classList.add('disable');
}
function closePopup(){
    let popup = document.getElementById("popupActive")
    popup.classList.remove('active');
    setTimeout(closeBg,1000);
}
