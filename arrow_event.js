"use strict";

window.addEventListener("load", function () {
  let arrow_back = document.querySelector("#arrow_back_wrap");
  let arrow_forwards = document.querySelector("#arrow_forwards_wrap");
  let certification_log_wrap = document.querySelector(
    "#certification_log_wrap"
  );

  let index = 0;
  console.log(index);

  arrow_back.addEventListener("click", function () {
    index = index - 1;
    if (index <= 0) {
      index = 0;
    }
    console.log(index);
    if (index === 0) {
      certification_log_wrap.style.animation = "first_click_back 1s forwards";
    } else if (index === 1) {
      certification_log_wrap.style.animation = "second_click_back 1s forwards";
    }
  });

  arrow_forwards.addEventListener("click", function () {
    index++;
    if (index >= 3) {
      index = 0;
    }
    console.log(index);
    if (index === 1) {
      certification_log_wrap.style.animation =
        "first_click_forwards 1s forwards";
      console.log("Primer click");
    } else if (index === 2) {
      certification_log_wrap.style.animation =
        "second_click_forwards 1s forwards";
      console.log("Segundo click");
    }
  });
});
