//navbar

let burgur = document.querySelector(".menu");
let lines = document.querySelector(".line");
let navlinks = document.querySelector(".site-nav");
let links = document.querySelectorAll(".site-nav li");

burgur.addEventListener("click", () =>{
    navlinks.classList.toggle("open");
    lines.classList.toggle("trans");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    navlinks.classList.remove("open");
    lines.classList.remove("trans");
  });
});


// let lastScrollTop = 0;
// const header = document.querySelector("header");

// window.addEventListener("scroll", function() {
//   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   if (scrollTop > 200) {
//   header.classList.remove("hide");
// } else {
//   header.classList.add("hide");
// }

//   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 避免負值
// });


//bgcolor changer

// function bgChanger(){ 
// if(this.scrollY > this.innerHeight / 1.5){
//     document.body.classList.add("bg-active");
   
// }else{
//     document.body.classList.remove("bg-active");
  
// }
// }
// window.addEventListener("scroll", bgChanger);


function bgChanger(scrollY, winHeight) {
  if (scrollY > winHeight / 1.5) {
    document.body.classList.add("bg-active");
  } else {
    document.body.classList.remove("bg-active");
  }
}

function toggleScrollTop(scrollY, winHeight, docHeight, scrollBtn) {
  if (scrollY > (docHeight - winHeight) / 5) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.querySelector(".scroll-top");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    bgChanger(scrollY, winHeight);
    toggleScrollTop(scrollY, winHeight, docHeight, scrollBtn);
  });
});



  document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector('.text p');
  
  if (textElement) {
    const circleType = new CircleType(textElement);
    circleType.radius(40);
    circleType.dir(1);
    // circleType.forceHeight(true);
  } else {
    console.warn("找不到 .text p 元素，CircleType 未初始化。");
  }
});


const galleries = document.querySelectorAll(".gird-gallery");

if (galleries.length > 0) {
  galleries.forEach((section) => {
    const slides = section.querySelectorAll(".gird-content");

    let index = 0;
    const pattern = [
      [4, 4, 3, 2, 0, 0],
      [4, 5, 3, 2, 0, 0],
      [0, 3, 2, 3, 0, 0],
      [0, 2, 1, 2, 1, 0],
      [0, 0, 2, 4, 3, 2],
      [0, 0, 0, 1, 1, 1],
    ];

    let timeout;

    const nextSlide = () => {
      index = (index + 1) % pattern.length;

      // 防護：避免 slides 數量和 pattern 不一致
      if (slides.length !== pattern[index].length) {
        console.warn("⚠️ slides 數量和 pattern 不一致 in one gallery");
        return;
      }

      section.style.gridTemplateColumns = pattern[index]
        .map((p) => `${p}fr`)
        .join(" ");

      slides.forEach((slide, slideIndex) => {
        if (pattern[index][slideIndex] === 0) {
          slide.classList.add("hide");
        } else {
          slide.classList.remove("hide");
        }
      });

      clearTimeout(timeout);
      timeout = setTimeout(nextSlide, 3000);
    };

    section.addEventListener("click", nextSlide);
    timeout = setTimeout(nextSlide, 3000);
  });
} else {
  console.info("ℹ️ 本頁沒有 .gird-gallery，動畫未執行");
}


//modal

// 找出所有 open-modal 按鈕
const openModals = document.querySelectorAll(".open-modal");
const IS_VISIBLE_CLASS = "is-visible";

openModals.forEach(openModal => {
  const modal = openModal.closest(".project-card").querySelector(".modal");
  const modalContent = modal ? modal.querySelector(".modal-content") : null;
  const closeModal = modal ? modal.querySelector(".close-modal") : null;

  // 防呆：確認必要元素存在
  if (!modal || !modalContent || !closeModal) return;

  // 建立 timeline
  let tl = gsap.timeline({
    paused: true,
    onComplete: () => modal.classList.add(IS_VISIBLE_CLASS),
    onReverseComplete: () => modal.classList.remove(IS_VISIBLE_CLASS)
  });

  // 初始動畫流程
  tl.to(modal, { autoAlpha: 1, duration: 0.3 })
    .to(modalContent, { scale: 1, duration: 0.4, ease: "power3.out" }, "-=0.2");

  // 綁定事件
  openModal.addEventListener("click", () => tl.play());
  closeModal.addEventListener("click", () => tl.reverse());

  // ESC 鍵關閉
  document.addEventListener("keyup", (e) => {
    if (e.key === "Escape" && modal.classList.contains(IS_VISIBLE_CLASS)) {
      tl.reverse();
    }
  });
});




 // ===== Greeting 模組 =====

  function getGreetingMessage() {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();

    let timePeriod = '';
    if (hour >= 5 && hour < 11) timePeriod = 'morning';
    else if (hour >= 11 && hour < 14) timePeriod = 'noon';
    else if (hour >= 14 && hour < 18) timePeriod = 'afternoon';
    else timePeriod = 'night';

    const specialCases = {
      '1_morning': '你來了啊…星期一的倖存者，請進。',
      '5_afternoon': '嘿！是不是已經開始聞到自由的味道？'
    };

    const specialKey = `${day}_${timePeriod}`;
    if (specialCases[specialKey]) return specialCases[specialKey];

    const defaultMessages = {
      morning: '早安啊，你怎麼這麼早？咖啡好了嗎？',
      noon: '午安～吃飽了嗎？吃飽可以逛，沒吃飽也可以逛。',
      afternoon: '下午好～需要一杯提神的咖啡嗎？',
      night: '喂～這麼晚還來？Zzz...Zzz...'
    };

    return defaultMessages[timePeriod];
  }

  const sayHi = document.querySelector('.say-hi');
  if (sayHi) {
    const message = getGreetingMessage();
   
    sayHi.textContent = message;

  } else {
    console.warn('⚠️ 找不到 .say-hi 元素');
  }







//pop up image
const imgModal = document.querySelector(".img-modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
// const caption = document.querySelector(".caption");


previews.forEach(preview =>{
    preview.addEventListener("click" ,() =>{
        imgModal.classList.add("open");
        original.classList.add("open");
        //Dynamic change text and imge
        

        original.src =  preview.src;
        const altText = preview.alt;
        // caption.textContent = altText;
    });
});

imgModal.addEventListener("click",(e) => {
    if(e.target.classList.contains("img-modal")){
        imgModal.classList.remove("open");
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








  // ===== Zoom 模組 =====
  const zoom = document.querySelector('.zoom');
const zoomText = zoom ? zoom.querySelector('p') : null;
const projectImgs = document.querySelectorAll('.project-img');
const imgContainers = document.querySelectorAll('.img-container');
const targets = [...projectImgs, ...imgContainers];

function positionZoom(e) {
  const posX = e.pageX;
  const posY = e.pageY;
  if (zoom) {
    zoom.style.left = `${posX - zoom.offsetWidth / 2}px`;
    zoom.style.top = `${posY - zoom.offsetHeight / 0.7}px`; // 稍微往上
  }
}

function showZoom(e, target) {
  const zoomTextValue =
    target.getAttribute('data-zoom-text') ||
    target.closest('[data-zoom-text]')?.getAttribute('data-zoom-text') ||
    'more';

  zoomText.textContent = zoomTextValue;
  zoom.classList.add('show', 'loading');
  positionZoom(e);
}

function hideZoom() {
  zoom?.classList.remove('show', 'loading');
}

if (zoom && zoomText) {
  targets.forEach(target => {
    target.addEventListener('pointerenter', e => showZoom(e, target));
    target.addEventListener('pointermove', e => positionZoom(e));
    target.addEventListener('pointerleave', hideZoom);

    target.addEventListener('pointerdown', e => showZoom(e, target));
    target.addEventListener('pointerup', hideZoom);
  });

  // 保險：在 modal 開啟時強制隱藏 zoom
  document.querySelectorAll('.modal-trigger').forEach(btn => {
    btn.addEventListener('click', hideZoom);
  });
} else {
  console.warn('⚠️ 找不到 .zoom 或其內部 <p>，Zoom 功能未啟用');
}





