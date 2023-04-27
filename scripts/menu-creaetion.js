function createArray(){
    let createpopup = document.getElementById("input-field").value;
    const menuItems = createpopup.split(", ")
    
    const menuList = document.createElement("ul");
    menuItems.forEach(function(item) {
        const menuItem =document.createElement("button");
        menuItem.classList.add("button-style-easy");
        menuItem.classList.add("button-array");
        menuItem.textContent = item.trim();
        menuList.appendChild(menuItem);
    });
    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = "";
    menuContainer.appendChild(menuList);
    
    console.log(menuItems);
}