function createArray(){
    let createpopup = document.getElementById("input-field").value;
    const menuItems = createpopup.split(", ")
    
    const menuList = document.createElement("ul");
    menuItems.forEach(function(item) {
        const menuItem =document.createElement("button");
        menuItem.classList.add("button-style-easy");
        menuItem.classList.add("button-array");
        let color = document.getElementById("head").value;
        menuItem.style.color = color;
        let color1 = document.getElementById("head1").value;
        menuItem.style.background = color1;
        let color2 = document.getElementById("head2").value;

        menuItem.onmouseout  = (function(){
            menuItem.style.background = color1; 
        });
        menuItem.onmouseover = (function(){
            menuItem.style.background = color2; 
        });

        menuItem.textContent = item.trim();
        menuList.appendChild(menuItem);
    });
    const menuContainer = document.getElementById("menu-container");
    menuContainer.innerHTML = "";
    menuContainer.appendChild(menuList);
    
    console.log(menuItems);
}