$(document).ready(function() {
  /*
輪撥設定
*/
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000
  });
  /*
lightbox設定
*/
  $(".popClose").on("click", function() {
    $.magnificPopup.close();
  });
  $(".gallery").each(function() {
    // the containers for all your galleries
    $(this).magnificPopup({
      delegate: "a", // the selector for gallery item
      type: "image",
      gallery: {
        enabled: true
      }
    });
  });
 
  $(".open-popup-link").magnificPopup({
    type: "inline",
    midClick: true,
    removalDelay: 300,
    mainClass: "mfp-fade"
  });
  /*-------------------------
主選單
-------------------------*/
  $(".switch .dropBt").click(function(e) {
    e.preventDefault();
    $(".nav-bg").toggleClass("navopen");
    $(this).toggleClass("active");
    /*menu字變色 */
    $(this)
      .siblings(".haveDrop")
      .toggleClass("open");
    /*選擇只有.haveDrop展開 */
    $(this)
      .closest(".toggleIcon")
      .toggleClass("closebt");
    /*找兄弟元素給他class.closebt */
    $(this)
      .parent()
      .siblings()
      .find(".dropBt")
      .removeClass("active");
    /*回上一父層，除了當下這個父層的兄弟去找裡面.dropBt */
    $(this)
      .parent()
      .siblings()
      .find(".haveDrop")
      .removeClass("open");
    /*回上一父層，除了當下這個父層的兄弟去找裡面.haveDrop */
    $(this)
      .parent()
      .siblings()
      .find(".toggleIcon")
      .removeClass("closebt");
    /*回上一父層，除了當下這個父層的兄弟去找裡面.toggleIcon */
  });
  //按到menu以外地方關閉dropmenu
  $(".nav-bg").click(function() {
    $(".nav-bg").removeClass("navopen");
    $(".dropBt").removeClass("active");
    $(".haveDrop").removeClass("open");
  });
  //側開nav函數
  $(".mobile_nav,.nav-closebt").click(function() {
    $(".nav").toggleClass("navopen");
    $(".nav").toggleClass("slideInLeft");
    $(".nav-bg").removeClass("navopen");
  });
  /*-------------------------
sidemenu選單
-------------------------*/
  $(".sideswitch .dropBt").click(function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    /*menu字變色 */
    $(this)
      .siblings(".haveDrop")
      .toggleClass("open");
    /*選擇只有.haveDrop展開 */
    $(this)
      .closest(".sidetoggleIcon")
      .toggleClass("sideclosebt");
    /*找兄弟元素給他class.closebt */
    $(this)
      .parent()
      .siblings()
      .find(".dropBt")
      .removeClass("active");
    /*回上一父層，除了當下這個父層的兄弟去找裡面.dropBt */
    $(this)
      .parent()
      .siblings()
      .find(".haveDrop")
      .removeClass("open");
    /*回上一父層，除了當下這個父層的兄弟去找裡面.haveDrop */
    $(this)
      .parent()
      .siblings()
      .find(".sidetoggleIcon")
      .removeClass("sideclosebt");
    /*回上一父層，除了當下這個父層的兄弟去找裡面.sidetoggleIcon */
  });
  /*-------------------------
表頭置頂
-------------------------*/
  $(document).scroll(function() {
    var y = $(this).scrollTop();

    if (y > 65) {
      $(".heroheader").addClass("navbar-fixed-top");
      // $(".heroheader").css("top", "-25px");
      $(".iknow").css("height", "0");
      $(".websites").css({ height: "0", "margin-bottom": "140px" });
    } else if (y == 0) {
      $(".heroheader").removeClass("navbar-fixed-top");
      // $(".heroheader").css("top", "0px");
      $(".iknow").css("height", "40px");
      $(".websites").css({ height: "25px", "margin-bottom": "0" });
    }
  });
  /*-------------------------
首頁大圖輪撥
-------------------------*/
  $(".kvarea").slick({
    /* 目標類別sliderbanner */
    infinite: true,
    /* 循環 */
    speed: 300,
    /* 速度 */
    slidesToShow: 1,
    /* 顯示圖片張數 */
    slidesToScroll: 1,
    /* 一次跳一張 */
    autoplay: true,
    /* 自動播放 */
    arrows: true,
    /* 左右箭頭 */
    prevArrow:
      '<button type="button" class="slick-prev Btn-prev">&#10094;</button>',
    nextArrow:
      '<button type="button" class="slick-next Btn-next">&#10095;</button>',
    autoplaySpeed: 3000,
    /* 輪播速度 */
    dots: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });
  /*-------------------------
卡片輪撥
-------------------------*/
  $(".variable-width").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    /* 左右箭頭 */
    prevArrow:
      '<button type="button" class="slick-prev Btn-prev">&#10094;</button>',
    nextArrow:
      '<button type="button" class="slick-next Btn-next">&#10095;</button>'
  });
  $(".variable-width").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    console.log(currentSlide);
  });

  /*-------------------------
商品內頁輪撥
-------------------------*/
  $(".slick3").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    appendDots: $(".wrap-slick3-dots"),
    dotsClass: "slick3-dots",
    infinite: true,
    autoplay: false,
    autoplaySpeed: 6000,
    arrows: false,
    customPaging: function(slick, index) {
      var portrait = $(slick.$slides[index]).data("thumb");
      return (
        '<img src=" ' + portrait + ' "/><div class="slick3-dot-overlay"></div>'
      );
    }
  });
  /*-------------------------
加購商品-slick4
-------------------------*/

  $(".slick4").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    appendDots: $(".wrap-slick4-dots"),
    dotsClass: "slick4-dots",
    infinite: true,
    autoplay: false,
    autoplaySpeed: 6000,
    arrows: false,
    customPaging: function(slick, index) {
      var portrait = $(slick.$slides[index]).data("thumb");
      return (
        '<img src=" ' + portrait + ' "/><div class="slick4-dot-overlay"></div>'
      );
    }
  });
  $(".overbuy-popup-link").click(function() {
    $(".slick4").slick("resize");
  });
  $(".overbuy-popup-link").magnificPopup({
    type: "inline",
    midClick: true,
    removalDelay: 300,
    mainClass: "mfp-fade"
  });

  /*-------------------------
slick3 商品lightbox 畫廊
-------------------------*/

  $(".slick3").each(function() {
    // the containers for all your galleries
    $(this).magnificPopup({
      delegate: "a", // the selector for gallery item
      type: "image",
      gallery: {
        enabled: true
      }
    });
  });
  /*-------------------------
slick3 商品第10張小圖 觸發畫廊
-------------------------*/
  $(".slick3-dots li")
    .eq(9)
    .on("click", function() {
      $(".wrap-slick3-dots")
        .prev()
        .magnificPopup("open", 9);
    });
  var lis = $(".slick3-dots>li").length - 9;
  var picmorebt =
    "<div class='picmorebt'><div class='inner'>+" + lis + "</div></div>";
  $(".slick3-dots li")
    .eq(9)
    .append(picmorebt);
  /*-------------------------
商品特色－tab
-------------------------*/
  // 預設顯示第一個 Tab
  var _showTab = 0;
  $(".product_tab").each(function() {
    // 目前的頁籤區塊
    var $tab = $(this);

    var $defaultLi = $("ul.tabs li", $tab)
      .eq(_showTab)
      .addClass("active");
    $($defaultLi.find("a").attr("href"))
      .siblings()
      .hide();

    // 當 li 頁籤被點擊時...
    // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
    $("ul.tabs li", $tab)
      .click(function() {
        // 找出 li 中的超連結 href(#id)
        var $this = $(this),
          _clickTab = $this.find("a").attr("href");
        // 把目前點擊到的 li 頁籤加上 .active
        // 並把兄弟元素中有 .active 的都移除 class
        $this
          .addClass("active")
          .siblings(".active")
          .removeClass("active");
        // 淡入相對應的內容並隱藏兄弟元素
        $(_clickTab)
          .stop(false, true)
          .fadeIn()
          .siblings()
          .hide();

        return false;
      })
      .find("a")
      .focus(function() {
        this.blur();
      });
  });
  /*-------------------------
商品說明展開按鈕
-------------------------*/

  $(".openupbt").click(function() {
    $(this)
      .prev()
      .toggleClass("openup");

    if ($.trim($(this).text()) === "顯示完整資訊") {
      $(this).text("收合");
    } else {
      $(this).text("顯示完整資訊");
    }
  });
  /*-------------------------
coupon展開按鈕
-------------------------*/

  $(".couponopenbt").click(function() {
    $(this)
      .parent(".transport")
      .toggleClass("openup");

    if ($.trim($(this).text()) === "顯示全部") {
      $(this).text("收合");
    } else {
      $(this).text("顯示全部");
    }
  });
  /*-------------------------
購物車動畫
-------------------------*/
  $(".joinCart").click(function() {
    $(".cart_animate").toggleClass("animateswitch");
    setTimeout(function() {
      $(".cart_animate").removeClass("animateswitch");
    }, 1000);
  });
  /*-------------------------
會員頁sidemenu當前頁面位置
-------------------------*/

  $(".userNav a").each(function() {
    if ($(this).attr("href") == window.location.pathname.split("/")[1])
      $(this).addClass("active");
  });

  /*-------------------------
分享賺紅利複製按鈕
-------------------------*/

  $(".copy_btn").click(function() {
    $(".copy_btn i")
      .css("display", "inline-block")
      .show(300)
      .delay(3000)
      .hide(300);
    $(".copy")
      .addClass("f_hidden")
      .delay(3000)
      .queue(function() {
        $(this)
          .removeClass("f_hidden")
          .dequeue();
      });
    $(".copied")
      .removeClass("f_hidden")
      .delay(3000)
      .queue(function() {
        $(this)
          .addClass("f_hidden")
          .dequeue();
      });
  });
  /*-------------------------
FAQ
-------------------------*/
  $("li.a").hide();
  $("li.q").click(function() {
    //gets next element
    //opens .a of selected question
    $(this)
      .next()
      .slideToggle(500)
      //selects all other answers and slides up any open answer
      .siblings("li.a")
      .slideUp();

    //Grab img from clicked question
    var img = $(this).children("i");
    //Remove Rotate class from all images except the active
    $("i")
      .not(img)
      .removeClass("rotate");
    //toggle rotate class
    img.toggleClass("rotate");
  });
  /*-------------------------
文件ready ok jquery結束
-------------------------*/


});
/*-------------------------
發票切換
-------------------------*/
function checkYear() {
  var selectValue = $("select[name='invoiceType']").val();
  if (selectValue == 1) {
    $("#ioption1").show();
    $("#ioption2").hide();
    $("#ioption3").hide();
    $("#ioption4").hide();
    $("#ioption5").hide();
  }
  if (selectValue == 2) {
    $("#ioption1").hide();
    $("#ioption2").show();
    $("#ioption3").hide();
    $("#ioption4").hide();
    $("#ioption5").hide();
  }
  if (selectValue == 3) {
    $("#ioption1").hide();
    $("#ioption2").hide();
    $("#ioption3").show();
    $("#ioption4").hide();
    $("#ioption5").hide();
  }
  if (selectValue == 4) {
    $("#ioption1").hide();
    $("#ioption2").hide();
    $("#ioption3").hide();
    $("#ioption4").show();
    $("#ioption5").hide();
  }
  if (selectValue == 5) {
    $("#ioption1").hide();
    $("#ioption2").hide();
    $("#ioption3").hide();
    $("#ioption4").hide();
    $("#ioption5").show();
  }
}
/*-------------------------
驗證碼倒數
-------------------------*/

var wait = 60;
function time(o) {
  if (wait == 0) {
    o.removeAttribute("disabled");
    o.value = "發送驗證碼至手機";
    wait = 60;
  } else {
    o.setAttribute("disabled", true);
    o.value = wait + "秒後重新傳送";
    wait--;
    setTimeout(function() {
      time(o);
    }, 1000);
  }
}
$("#timebtn").click(function () {
  time($(this));
});
