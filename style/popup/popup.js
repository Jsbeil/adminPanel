

function closePopup(){
    let popup = document.getElementById("popupActive")
    let bGpopup = document.getElementById("bg-popup");
    bGpopup.classList.add('disable');
    popup.classList.remove('active');
}
