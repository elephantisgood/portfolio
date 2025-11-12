// // let ques = document.querySelector(".question");
// let qqq = document.getElementsByClassName("question");
// let text = document.querySelector(".text");


// qqq.addEventListener("click",() => {
//     // console.log(qqq);

//     text.classList.add("open");

// });



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



   const buttons = document.querySelectorAll(".btn_area .button-74");
  const blocks = document.querySelectorAll(".tea_block");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedType = btn.dataset.type;

      // 切換圖區塊顯示
      blocks.forEach(block => {
        block.classList.toggle("active", block.dataset.type === selectedType);
      });

      // 切換按鈕樣式
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // 預設選第一個
  buttons[0].click();