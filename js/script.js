const hamburguer = document.querySelector(".bars");
const navbar = document.querySelector(".navbar");

hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('active');
    navbar.classList.toggle('active');
})
