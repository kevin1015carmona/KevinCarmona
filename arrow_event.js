"use strict";

window.addEventListener("load", function () {
  let arrow_back = document.querySelector("#arrow_back_wrap");
  let arrow_forwards = document.querySelector("#arrow_forwards_wrap");
  let certification_log_wrap = document.querySelector(
    "#certification_log_wrap"
  );

  let index = 0;
  console.log(index);

  if (window.matchMedia("(min-width:1101px)").matches) {
    arrow_back.addEventListener("click", function () {
      index = index - 1;
      if (index <= 0) {
        index = 0;
      }
      if (index === 0) {
        certification_log_wrap.style.animation =
          "first_click_back .5s forwards";
      } else if (index === 1) {
        certification_log_wrap.style.animation =
          "second_click_back .5s forwards";
      }
    });

    arrow_forwards.addEventListener("click", function () {
      index++;
      if (index === 1) {
        certification_log_wrap.style.animation =
          "first_click_forwards .5s forwards";
      } else if (index === 2) {
        certification_log_wrap.style.animation =
          "second_click_forwards .5s forwards";
      } else if (index === 3) {
        certification_log_wrap.style.animation = "return_click 1s forwards";
        index = 0;
      }
    });
  } else if (
    /*--------------------------*/
    window.matchMedia("(min-width:800px)").matches &&
    window.matchMedia("(max-width:1100px)").matches
  ) {
    arrow_back.addEventListener("click", function () {
      index = index - 1;
      if (index <= 0) {
        index = 0;
      }
      console.log(index);
      if (index === 0) {
        certification_log_wrap.style.animation =
          "first_click_back .5s forwards";
      } else if (index === 1) {
        certification_log_wrap.style.animation =
          "second_click_back .5s forwards";
      } else if (index === 2) {
        certification_log_wrap.style.animation =
          "three_click_back .5s forwards";
      }
    });

    arrow_forwards.addEventListener("click", function () {
      index++;
      console.log(index);
      if (index === 1) {
        certification_log_wrap.style.animation =
          "first_click_forwards .5s forwards";
        console.log("Primer click");
      } else if (index === 2) {
        certification_log_wrap.style.animation =
          "second_click_forwards .5s forwards";
        console.log("Segundo click");
      } else if (index === 3) {
        certification_log_wrap.style.animation =
          "three_click_forwards .5s forwards";
        console.log("tercer click");
      } else if (index === 4) {
        certification_log_wrap.style.animation = "return_click 1s forwards";
        index = 0;
      }
    });
  } else if (
    /*--------------------------*/
    window.matchMedia("(min-width:500px)").matches &&
    window.matchMedia("(max-width:799px)").matches
  ) {
    arrow_back.addEventListener("click", function () {
      index = index - 1;
      if (index <= 0) {
        index = 0;
      }
      console.log(index);
      if (index === 0) {
        certification_log_wrap.style.animation =
          "first_click_back .5s forwards";
      } else if (index === 1) {
        certification_log_wrap.style.animation =
          "second_click_back .5s forwards";
      }
    });

    arrow_forwards.addEventListener("click", function () {
      index++;
      console.log(index);
      if (index === 1) {
        certification_log_wrap.style.animation =
          "first_click_forwards .5s forwards";
        console.log("Primer click");
      } else if (index === 2) {
        certification_log_wrap.style.animation =
          "second_click_forwards .5s forwards";
        console.log("Segundo click");
      } else if (index === 3) {
        certification_log_wrap.style.animation = "return_click 1s forwards";
        index = 0;
      }
    });
  } else if (
    /*--------------------------*/
    window.matchMedia("(min-width:0px)").matches &&
    window.matchMedia("(max-width:499px)").matches
  ) {
    arrow_back.addEventListener("click", function () {
      index = index - 1;
      if (index <= 0) {
        index = 0;
      }
      console.log(index);
      if (index === 0) {
        certification_log_wrap.style.animation =
          "first_click_back .5s forwards";
      } else if (index === 1) {
        certification_log_wrap.style.animation =
          "second_click_back .5s forwards";
      }
    });

    arrow_forwards.addEventListener("click", function () {
      index++;
      console.log(index);
      if (index === 1) {
        certification_log_wrap.style.animation =
          "first_click_forwards .5s forwards";
        console.log("Primer click");
      } else if (index === 2) {
        certification_log_wrap.style.animation =
          "second_click_forwards .5s forwards";
        console.log("Segundo click");
      } else if (index === 3) {
        console.log("regreso");
        certification_log_wrap.style.animation = "return_click 1s forwards";
        index = 0;
      }
    });
  }
});