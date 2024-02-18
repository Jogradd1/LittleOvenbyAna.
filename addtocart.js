var MenuItems = document.getElementById("MenuItems")

MenuItems.style.maxHeight = "0px";

function menutoggle(){
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}
let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');

let listProducts = [];

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
} )
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
} )

