let hamgurger = document.querySelector('.hamburger-icon')
let menuItems = document.querySelector('.menu-items')
let btnClose = document.querySelector('.close')
let menuItem = document.querySelectorAll('.menu-item')
hamgurger.addEventListener('click', function(){
    console.log(hamgurger);
    if(menuItems.style.display == 'none' || btnClose.style.display == 'none'){
        menuItems.style.display ='flex';
        btnClose.style.display = 'block';

    }
    else{
         menuItems.style.display = 'none'
    }
})
btnClose.addEventListener('click', function(){
    if(menuItems.style.display == 'flex'){
        menuItems.style.display = 'none'
        btnClose.style.display = 'none'
    }
})
for(let i=0; i < menuItem.length; i++){
    menuItem[i].onclick = function(e){
        menuItems.style.display = 'none'
        btnClose.style.display = 'none'
        location.target()
    }
}

