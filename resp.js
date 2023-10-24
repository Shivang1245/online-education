burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav') 
navlist = document.querySelector('.nav-list') 

burger.addEventListener('click', ()=>{
    
    navbar.classList.toggle('h-class-resp');

    rightnav.classList.toggle('v-class-resp');

    navlist.classList.toggle('v-class-resp');
    
})