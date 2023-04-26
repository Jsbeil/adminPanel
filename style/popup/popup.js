
function closeBg(){
    let bGpopup = document.getElementById("bg-popup");
    bGpopup.classList.add('disable');
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

