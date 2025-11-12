//navbar

let burgur = document.querySelector(".menu");
let lines = document.querySelector(".line");
let navlinks = document.querySelector(".site-nav");
let links = document.querySelectorAll(".site-nav li");

burgur.addEventListener("click", () =>{
    navlinks.classList.toggle("open");
    lines.classList.toggle("trans");
});


//bgcolor changer

function bgChanger(){ 
if(this.scrollY > this.innerHeight / 1.5){
    document.body.classList.add("bg-active");
   
}else{
    document.body.classList.remove("bg-active");
  
}
}
window.addEventListener("scroll", bgChanger);







//pop up image
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");


previews.forEach(preview =>{
    preview.addEventListener("click" ,() =>{
        modal.classList.add("open");
        original.classList.add("open");
        //Dynamic change text and imge
        

        original.src =  preview.src;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

modal.addEventListener("click",(e) => {
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
       
    }
});





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



const zoom = document.querySelector('.zoom');
const projectImgs = document.querySelectorAll('.project-img');
const imgContainers = document.querySelectorAll('.img-container');
const targets = [...projectImgs, ...imgContainers];





targets.forEach(target => {
  target.addEventListener('mouseenter', e => {
    zoom.classList.add('show', 'loading');
    positionZoom(e);
   
  });

  target.addEventListener('mousemove', e => {
    positionZoom(e);
  });

  target.addEventListener('mouseleave', () => {
    zoom.classList.remove('show', 'loading');
  });

  // 手機支援
  target.addEventListener('touchstart', e => {
    zoom.classList.add('show', 'loading');
    positionZoom(e.touches[0]);
  });

  target.addEventListener('touchmove', e => {
    positionZoom(e.touches[0]);
  });

  target.addEventListener('touchend', () => {
    zoom.classList.remove('show', 'loading');
  });
});


function positionZoom(e) {
  const posX = e.clientX;
  const posY = e.clientY;


  zoom.style.left = `${posX - zoom.offsetWidth / 2}px`;
  zoom.style.top = `${posY - zoom.offsetHeight / 1.5}px`; // 稍微往上

}