//navbar

let burgur = document.querySelector(".menu");
let lines = document.querySelector(".line");
let navlinks = document.querySelector(".site-nav");
let links = document.querySelectorAll(".site-nav li");

burgur.addEventListener("click", () =>{
    navlinks.classList.toggle("open");
    lines.classList.toggle("trans");
});


let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 200) {
  header.classList.remove("hide");
} else {
  header.classList.add("hide");
}

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 避免負值
});


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
  if (scrollY > (docHeight - winHeight) / 2) {
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







  // //circle text

  //  // 取得文字元素
  // const textElement = document.querySelector('.text p');

  // // 建立 CircleType 實例
  // const circleType = new CircleType(textElement);

  // // 設定半徑 (數字越大，圓越大)
  // circleType.radius(40);

  // // 設定方向 (1 = 順時針, -1 = 逆時針)
  // circleType.dir(1);
  // // circleType.forceHeight(true);




// // document.addEventListener('DOMContentLoaded', () => {
// //   const text = document.querySelector(".text");
// //   if (text) {
// //     text.innerHTML = text.innerText
// //       .split("")
// //       .map((char, i) => `<span style="transform:rotate(${i * 13}deg)">${char}</span>`)
// //       .join("");
// //   }
// //   });







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

  if (zoom && zoomText) {
    targets.forEach(target => {
      target.addEventListener('mouseenter', e => {
        const zoomTextValue =
          target.getAttribute('data-zoom-text') ||
          target.closest('[data-zoom-text]')?.getAttribute('data-zoom-text') ||
          'more';

        zoomText.textContent = zoomTextValue;
        zoom.classList.add('show', 'loading');
        positionZoom(e);
      });

      target.addEventListener('mousemove', e => positionZoom(e));
      target.addEventListener('mouseleave', () => zoom.classList.remove('show', 'loading'));

      // 手機支援
      target.addEventListener('touchstart', e => {
        const zoomTextValue =
          target.getAttribute('data-zoom-text') ||
          target.closest('[data-zoom-text]')?.getAttribute('data-zoom-text') ||
          'more';

        zoomText.textContent = zoomTextValue;
        zoom.classList.add('show', 'loading');
        positionZoom(e.touches[0]);
      });

      target.addEventListener('touchmove', e => positionZoom(e.touches[0]));
      target.addEventListener('touchend', () => zoom.classList.remove('show', 'loading'));
    });
  } else {
    console.warn('⚠️ 找不到 .zoom 或其內部 <p>，Zoom 功能未啟用');
  }






