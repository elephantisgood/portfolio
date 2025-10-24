// 抓到開始畫面與遊戲畫面
const startScreen = document.getElementById("start-screen");
const gameBoard = document.getElementById("game-board");
const startButton = document.getElementById("start-button");

// 一開始：隱藏遊戲畫面
gameBoard.classList.add("hide");

// 點下「開始遊戲」按鈕時：
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");  // 隱藏開始畫面
  gameBoard.classList.remove("hide"); // 顯示遊戲區
});




const cards = document.querySelectorAll('.memory-card');
const timeCounter = document.getElementById("time-text");

const winModal = document.querySelector(".win-game-modal .modal");
const failModal = document.querySelector(".fail-game-modal");

let countdown; // 倒數計時器
let timeStart = false;
let timeLeft = 30; // 1 分鐘倒數（單位：秒）

let matched = [];
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// ➤ 開始倒數計時
function startCountdown() {
  countdown = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(countdown);
      checkFail(); // 檢查是否配對成功，否則彈出失敗 modal
    }
  }, 1000);
}

// ➤ 更新倒數顯示
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timeCounter.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// ➤ 翻牌邏輯
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  // 第一次翻牌才開始倒數
  if (!timeStart) {
    timeStart = true;
    startCountdown();
  }

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

// ➤ 檢查配對
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

// ➤ 配對成功處理
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  matched.push(firstCard, secondCard);

  if (matched.length === cards.length) {
    clearInterval(countdown);
    showWinModal();
  }

  resetBoard();
}



// ➤ 配對失敗處理
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// ➤ 當時間到還沒配對完：顯示失敗 modal
function checkFail() {
  if (matched.length < cards.length) {
    showFailModal();
  }
}

// ➤ 顯示 modal
function showWinModal() {
 
  document.querySelector(".win-game-modal").classList.remove("hide");
  document.querySelector(".win-game-modal").classList.add("show");
}


function showFailModal() {
  failModal.classList.remove("hide");
  failModal.classList.add("show");
}

// ➤ 洗牌
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
})();

// ➤ 加上點擊事件
cards.forEach(card => card.addEventListener('click', flipCard));

// ➤ 初始時間顯示
updateTimerDisplay();




// ➤ 重新開始遊戲
function restartGame() {

 // 把 modal 隱藏起來
document.querySelector(".win-game-modal").classList.add("hide");
document.querySelector(".win-game-modal").classList.remove("show");

document.querySelector(".fail-game-modal").classList.add("hide");
document.querySelector(".fail-game-modal").classList.remove("show");


   // ➤ 顯示「開始遊戲」畫面，隱藏遊戲畫面
   document.getElementById("start-screen").classList.remove("hide");
   document.getElementById("game-board").classList.add("hide");
 

  // 2. 重設變數
  matched = [];
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
  timeStart = false;
  timeLeft = 30;
  clearInterval(countdown);
  updateTimerDisplay();

  // 3. 重設卡牌狀態
  cards.forEach(card => {
    card.classList.remove('flip');
    card.addEventListener('click', flipCard);
  });

  // 4. 洗牌
  shuffleCards();
}

// ➤ 洗牌邏輯抽成函式
function shuffleCards() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
}

// ➤ 加上事件監聽（所有再玩一次按鈕）
document.querySelectorAll('.restart-btn').forEach(btn => {
  btn.addEventListener('click', restartGame);
});










//scratchcard.js
const scContainer = document.getElementById('js--sc--container')
const scInfos = document.querySelector('.sc__infos');
const sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.LINE,
  containerWidth: scContainer.offsetWidth,
  containerHeight: 100,
  imageForwardSrc: './Images/dad2022/scratch_top.png',
  imageBackgroundSrc: './Images/dad2022/scratch_100.png',
  htmlBackground: '',
  clearZoneRadius: 50,
  nPoints: 0,
  pointSize: 0
  // callback: function () {
  //   alert('Now the window will reload !')
  //   window.location.reload()
  // }
})

// Init
sc.init().then(() => {
  sc.canvas.addEventListener('scratch.move', () => {
    let percent = sc.getPercent().toFixed(0);
    scInfos.innerHTML = percent + '%';
    console.log(percent)
  })
}).catch((error) => {
  // image not loaded
  alert(error.message);
});


// let c1 = document.getElementById("c1");
// let c2 = document.getElementById("c2");
		
// let ctx1 = c1.getContext("2d");
// let ctx2 = c2.getContext("2d");

// let imgs = new Image();
// 		imgs.src = 'img/scratch_02.png';
// 		imgs.onload = function(){
// 			ctx2.drawImage(this,0,0)
// 		}

//     let img2 = new Image();
// 		img2.src = 'img/scratch_01.png';
// 		img2.onload = function(){
// 			ctx1.drawImage(this,0,0)
// 		}

//     c1.onmousedown = function(ev){
//       c1.onmousemove = function(e){
//         console.log(e);
//         var w = 50;			// 清除筆刷的寬度
//         var h = 50;			// 清除筆刷的高度
//         var x = e.pageX-c1.offsetLeft - w/2;    // 清除筆刷的x位置
//         var y = e.pageY-c1.offsetTop - h/2;		// 清除筆刷的y位置
//         ctx1.clearRect(x,y,w,h);
//       }
//       }
//       c1.onmouseup = function(ev){
//       // 取消onmousemove事件
//       c1.onmousemove = null;
//       }

      //手機般操作

    // c1.ontouchstart = function(ev){ // 原本是onmousedown 
    //   c1.ontouchmove = function(e){  // 原本是onmousemove 
    //     console.log(e);
    //     var w = 50;	
    //     var h = 50;	
    //     var x = e.pageX-c1.offsetLeft - w/2;
    //     var y = e.pageY-c1.offsetTop - h/2;
    //     ctx1.clearRect(x,y,w,h);
    //   }
    //   }
    //   c1.ontouchend = function(ev){ // 原本是onmouseup 
  
    //   c1.ontouchmove = null; // 原本是onmousemove 
    //   }

   






     