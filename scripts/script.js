
//=======  slider home =====

 // ======= slider home cohete ======

 const cohete = document.querySelector('.cohete')

 cohete.addEventListener('animationend', ()=>{
   cohete.classList.add('visible')
 })

const sliderHome = document.querySelector('.slider-home')
const swiper = new Swiper( sliderHome, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,   
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    autoplay: {
        delay: 7000,
      },      
  });



  /* ====== change color header ======= */

const logo = document.querySelector('#img-logo')
const numberCel = document.querySelector('#cel')

const changeHeader = ()=>{
   const header = document.querySelector('#header');
   let scrollValue = window.scrollY;

   if(scrollValue > 130){
    logo.src="./images/logo_2D3_alpha_2.png";
    header.classList.add('header--active');
    numberCel.classList.add('cel-active');
   }else{
    header.classList.remove('header--active');
    logo.src= "./images/logo_2D3_alpha.png";
    numberCel.classList.remove('cel-active');

   }
 }
 
 window.addEventListener('scroll', changeHeader)

   /* ====== MODAL pop up ======= */

   const modal = document.querySelector('#modal');
   const btnOpen = document.querySelector('#btn-open-modal');
   const contentModal = document.querySelector('.modal-content');

   const openModal = ()=>{
     modal.style.visibility = 'visible';
     contentModal.classList.toggle('motionModal')
   }
   modal.addEventListener('click', ()=>{
    modal.style.visibility = 'hidden';
   })

   btnOpen.addEventListener('click', openModal)



   /* ====== Elementos Observer ======= */

   const element = document.querySelectorAll('.observe')
   console.log(element)

   const observar = (items)=>{
      items.forEach(item =>{  
    if(item.isIntersecting){
        // console.log(item.target + 'observado')
        item.target.classList.add('motion-translate');        
      }})
   }

   const opciones = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
}


   const observador = new IntersectionObserver(observar, opciones);
   element.forEach(items => observador.observe(items))


 


 









 