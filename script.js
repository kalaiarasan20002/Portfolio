  // active hamburger menu  
  let menuicon = document.querySelector(".menu-icon");
  let navlist = document.querySelector(".navlist")
  menuicon.addEventListener("click",()=>{
    menuicon.classList.toggle("active");
    navlist.classList.toggle("actve");
    document.body.classList.toggle("open");
  });

  // remove navlist
  navlist.addEventListener("click",()=>{
    navlist.classList.remove("actve");
    menuicon.classList.remove("actve");
    document.body.classList.remove("open");
  })

  
  
  // rotate text js code
  let text = document.querySelector(".text p");

 text.innerHTML = text.innerHTML.split("").map((char,i)=>
     `<b style="transform:rotate(${i * 6.3}deg")>$(char)</b>`
).join("");


// switch between about buttons
const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
  contents.forEach(content => content.style.display - 'none');
  contents[index].style.display = 'block';
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  });
  });


  // portfolio fillter
var mixer = mixitup('.portfolio-gallery',{
  selectors: {
        target: '.portfolio-box'
  },
  animation: {
  duration: 500
  }
  });


  // Initialize swiperjs

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    autoplay:{
    delay:3000,
    disableOnInteraction:false, 
    },

    breakpoints: {
      576:{
      slidesPerView:2,
      spaceBetween:10.
      },
      1200:{
      slidesPerView:3,
      spaceBetween: 20,
      },
      
    }
  });

  // skill Progress bar

  const first_skill = document.querySelector(".skill:first-child");
  const sk_counters = document.querySelectorAll(".counter span");
  const progress_bars = document.querySelectorAll(".skills svg circle");

  window.addEventListener("scroll",() =>{
   if(!skillsPlayed)
    skillsCounter();
})

  function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
   if(window.innerHeight>= topPosition + el.offsetHeight)return true;
   return false;
  }

  function updateCount(num,maxnum){
    let currentNum = +num.innerText;


    if(currentNum<maxnum){
      num.innerText = currentNum + 1;
      setTimeout(()=>{
        updateCount(num,maxnum)
      },12)
    }
  }

  function skillsCounter(){
    if(!hasReached(first_skill))return;
     skillsPlayed = true;
    sk_counters.forEach((counter,i)=>{
       let target = + counter.dataset.target;
       let storkeValue = 465 - 465 * (target/100);


       progress_bars[i].style.setProperty("--target",storkeValue);

       setTimeout(()=> {
       },400)
    });
  
         progress_bars.forEach(p=> p.style.animation = "progress  2s ease in out forwards");
  }


  // side progress bar
 
    let calScrolllValue = ()=> {
      let scrollProgress = document.getElementById("progress");
      let pos = document.documentElement.scrollTop;

      let calcHeight = documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrollvalue = Math.round((pos * 100)/calcHeight);

        if(pos > 100){
          scrollProgress.style.display = "grid";
        }else{
          scrollProgress.style.display = "none";
        }
         scrollProgress.addEventListener("click",()=>{
            document.documentElement.scrollTop = 0;
         });
          
          scrollProgress.style.background =  `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}% `
        };
       
        window.onscroll = calScrolllValue;
        window.onload = calScrolllValue;


        // active menu 

        let menuLi = document.querySelector("header ul li a");
        let section = document.querySelector('section')

        function activeMenu(){
          let len = section.length;
          while(--len && window.scrollY + 97 < section(len).offsetTop){}
          menuLi.forEach(sec => sec.classList.remove("active"));
          menuLi[len].classList.add("active");
        }
         activeMenu();
         window.addEventListener("scroll",activeMenu);

         // scroll reveal

         ScrollReveal({
          distance:"90px",
          duration:2000,
          delay:200,
          //reset: true,
         });
          

         ScrollReveal().reveal('.hero-info,.main-text,.proposal,.heading',{
          origin: "top"
         });
         ScrollReveal().reveal('.about-img,.filter-buttons,.contact-info', {
          origin: "left"
         })
         ScrollReveal().reveal('.about-content,.skills',{
          origin:"right"
         });
         ScrollReveal().reveal('.allservices,.portfoilo-gallery,.blog-box,footer,.img-hero',{
          origin : "bottom"
         });

