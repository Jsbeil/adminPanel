
const imgaName = ["trv1.jpg","trv2.jpg","trv3.jpg","trv4.jpg","trv5.jpg","trv6.jpg"];

function createArray(){
    let createpopup = document.getElementById("input-field").value;
    const menuItems = createpopup.split(", ")
    
    const menuList = document.createElement("ul");
    menuList.id = 'menu';
    menuItems.forEach(function(item, index) {
        const menuItem =document.createElement("button");
        menuItem.classList.add("button-style-easy");
        menuItem.classList.add("button-array");
        
       menuItem.addEventListener("click", function(){
            const image = document.getElementById("image");
            image.src = "images/" + index +".jpg";
       })
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
    const menuCounter1 = document.getElementById("image-container");
    menuCounter1.appendChild(button);
    
    console.log(menuItems);
}
