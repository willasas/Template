//Theme switch
let toggle = document.querySelector("#switch");
toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  document.querySelectorAll(".inverted").forEach((res) => {
    res.classList.toggle("invert");
  });
});

/*head video*/
function addVideo(list) {
  if (window.addEventListener) {
    var str =
      '<video class="topVid" autoplay="autoplay" loop="loop" muted=""><source src="https://game.gtimg.cn/images/lpl/act/a20201208dmcup/top.mp4" type="video/mp4"></video>';
    document.getElementById(list).innerHTML = str;
  } else if (window.attachEvent) {
    document.getElementById(list).style.display == "none";
  }
}
addVideo("topVideo");

/*sidebar scroll & click event*/
/*²à±ßÀ¸*/
var idx = $(".nav-box p").index($(this));
$(".nav-box p").each(function (idx) {
  $(this).on("click", function () {
    $(this).addClass("on").siblings().removeClass("on");
    console.log(idx);
    switch (idx) {
      case 0: {
        break;
      }
      case 1: {
        $("html, body").animate(
          {
            scrollTop: 1200,
          },
          300
        );
        break;
      }
      case 2: {
        $("html, body").animate(
          {
            scrollTop: 2000,
          },
          300
        );
        break;
      }
      case 3: {
        $("html, body").animate(
          {
            scrollTop: 2900,
          },
          300
        );
        break;
      }
      case 4: {
        $("html, body").animate(
          {
            scrollTop: 4200,
          },
          300
        );
        break;
      }
      case 6: {
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          300
        );
        break;
      }
    }
  });
});
$(".nav-box .take-up").on("click", function () {
  $(".nav-box").addClass("ami");
  $(".show-nav").addClass("on");
});
$(".show-nav").on("click", function () {
  $(".nav-box").css("display", "block");
  $(".nav-box").removeClass("ami");
  $(".show-nav").removeClass("on");
});
$(document).scroll(function () {
  var top = $(document).scrollTop();
  // console.log(top);
  if (top <= 500) {
    $(".nav-box p").eq(0).addClass("on").siblings().removeClass("on");
  } else if (top > 501 && top <= 1200) {
    $(".nav-box p").eq(1).addClass("on").siblings().removeClass("on");
  } else if (top > 1201 && top <= 2000) {
    $(".nav-box p").eq(2).addClass("on").siblings().removeClass("on");
  } else if (top > 2001 && top <= 2900) {
    $(".nav-box p").eq(3).addClass("on").siblings().removeClass("on");
  } else if (top > 3500 && top <= 4200) {
    $(".nav-box p").eq(4).addClass("on").siblings().removeClass("on");
  }
  if (top <= 700) {
    $(".nav-box,.show-nav").css("display", "none");
  } else {
    $(".show-nav").css("display", "block");
    if ($(".nav-box").hasClass("ami")) {
      $(".nav-box").css("display", "none");
    } else {
      $(".nav-box").css("display", "block");
    }
  }
});
