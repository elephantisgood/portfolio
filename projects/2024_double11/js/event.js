
//簽到區//

  let signIndex = 0;

document.getElementById("btn_sign").addEventListener("click", function () {
  const signItems = document.querySelectorAll(".sign_content");

    if (signIndex >= signItems.length) {
    // 重置所有圖片為未簽到狀態
    signItems.forEach((item) => {
      const img = item.querySelector("img");
      img.src = "./images/2023_double11/sign_default.png";
      img.style.opacity = 1;
      img.style.transform = "scale(1)";
    });

    // 將簽到 index 重設
    signIndex = 0;

    // 可選提示（你也可以移除這段）
    // alert("你已經全部簽到完成囉！簽到已重置！");
    return;
  }

  const currentSignItem = signItems[signIndex];
  const imgElement = currentSignItem.querySelector("img");

  // 淡出 + 縮小動畫
  gsap.to(imgElement, {
    opacity: 0,
    scale: 0.5,
    duration: 0.3,
    ease:"cubic-bezier(0.68, -0.6, 0.32, 1.6)",
    onComplete: () => {
      // 換圖片
      imgElement.src = "./images/2023_double11/sign_success.png";

      // 等圖片載入完成後做淡入 + 放大動畫
      imgElement.onload = () => {
        gsap.fromTo(
          imgElement,
          { opacity: 0, scale: 1.2 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease:"back.out(1.7)"
          }
        );
      };
    }
  });

  signIndex++;
});



