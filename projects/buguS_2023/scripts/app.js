//navbar

// let burgur = document.querySelector(".menu");
// let lines = document.querySelector(".line");
// let navlinks = document.querySelector(".site-nav");
// let links = document.querySelectorAll(".site-nav li");

// burgur.addEventListener("click", () =>{
//     navlinks.classList.toggle("open");
//     lines.classList.toggle("trans");
// });

//bgcolor changer

function bgChanger(){ 
if(this.scrollY > this.innerHeight / 1.5){
    document.body.classList.add("bg-active");
   
}else{
    document.body.classList.remove("bg-active");
  
}
}
window.addEventListener("scroll", bgChanger);



//lazy load images

const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src = src;
}

const imgObtions = {};

const imgObserver = new IntersectionObserver((entries,imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    });
},imgObtions);

images.forEach(image => {
    imgObserver.observe(image);
});


//FAQ
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
   
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



