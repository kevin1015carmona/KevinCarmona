"use strict";
window.addEventListener("load", function () {
  const menu1 = document.querySelector(".menu1");
  const menu2 = document.querySelector(".menu2");
  const menu3 = document.querySelector(".menu3");
  const menu = document.querySelector("#menu");
  const boton = document.querySelector("#menu_button");
  var comprobar_menu = false;
  boton.addEventListener("click", function () {
    if (comprobar_menu == false) {
      menu1.style.animation = "nav_menu1 .7s forwards";
      menu2.style.animation = "nav_menu2 .7s forwards";
      menu3.style.animation = "nav_menu3 .7s forwards";
      menu.style.animation = "menu_expand .7s forwards";
      comprobar_menu = true;
    } else {
      menu1.style.animation = "nav_menu1_return .7s forwards";
      menu2.style.animation = "nav_menu2_return .7s forwards";
      menu3.style.animation = "nav_menu3_return .7s  forwards";
      menu.style.animation = "menu_contract .7s forwards";
      comprobar_menu = false;
    }
  });

  var about = document.querySelector("#perfil_description");
  var img_perfil = document.querySelector("#perfil");
  const social_wrap = document.querySelector("#white_background");
  //se crea una funcion para que cuando se cargue la pagina se
  //muestren elmcontenido de main> about

  //Animacion de flechas deslizar / about-certificaciones
  var des_one = document.querySelector(".des_one");
  var des_two = document.querySelector(".des_two");
  var des_three = document.querySelector(".des_three");
  des_one.style.animation = "flecha 1s infinite";
  des_two.style.animation = "flecha 1.1s infinite";
  des_three.style.animation = "flecha 1.2s infinite";

  //certificaciones
  var certification_log_wrap = document.querySelector(
    "#certification_log_wrap"
  );
  var css = document.querySelector(".css");
  var responsive = document.querySelector(".responsive");
  var figma = document.querySelector(".figma");
  const img_udemy = document.querySelector("#udemy");
  const img_camp = document.querySelector("#responsive");
  const img_figma = document.querySelector("#figma");

  //Proyectos
  var projects_wrap = document.querySelector("#projects_wrap");
  var type_blog = document.querySelector(".one");
  var contact = document.querySelector(".two");
  var three = document.querySelector(".three");
  const img_type_blog = document.querySelector("#blog");
  const img_contact = document.querySelector("#contact");
  const img_three = document.querySelector("#three");

  //Animacion de flechas deslizar / certificaciones-proyectos
  var des_four = document.querySelector(".des_four");
  var des_five = document.querySelector(".des_five");
  var des_six = document.querySelector(".des_six");
  des_four.style.animation = "flecha 1s infinite";
  des_five.style.animation = "flecha 1.1s infinite";
  des_six.style.animation = "flecha 1.2s infinite";

  //Efectos de agrandamiento secciones Certificacion y Proyectos
  if (
    window.matchMedia("(min-width:551px)").matches &&
    window.matchMedia("(max-width:2000px)").matches
  ) {
    css.addEventListener("mouseover", function () {
      img_udemy.style.animation = "img_hover 0.5s forwards";
    });
    css.addEventListener("mouseout", function () {
      img_udemy.style.animation = "img_out 0.5s forwards";
    });
    //Responsive
    responsive.addEventListener("mouseover", function () {
      img_camp.style.animation = "img_hover 0.5s forwards";
    });
    responsive.addEventListener("mouseout", function () {
      img_camp.style.animation = "img_out 0.5s forwards";
    });
    //figma
    figma.addEventListener("mouseover", function () {
      img_figma.style.animation = "img_hover 0.5s forwards";
    });
    figma.addEventListener("mouseout", function () {
      img_figma.style.animation = "img_out 0.5s forwards";
    });
    //Blog
    type_blog.addEventListener("mouseover", function () {
      img_type_blog.style.animation = "img_hover 0.5s forwards";
    });
    type_blog.addEventListener("mouseout", function () {
      img_type_blog.style.animation = "img_out 0.5s forwards";
    });
    //contact
    contact.addEventListener("mouseover", function () {
      img_contact.style.animation = "img_hover 0.5s forwards";
    });
    contact.addEventListener("mouseout", function () {
      img_contact.style.animation = "img_out 0.5s forwards";
    });
    //three
    three.addEventListener("mouseover", function () {
      img_three.style.animation = "img_hover 0.5s forwards";
    });
    three.addEventListener("mouseout", function () {
      img_three.style.animation = "img_out 0.5s forwards";
    });
    //
    window.addEventListener("scroll", function () {
      //ubicar el min del punto de corte (matchMedia)
      //animation of img
      about.style.animation = "animation_about 1.5s forwards";
      img_perfil.style.animation = "animation_img 1.5s forwards";
      social_wrap.style.animation = "animation_img 1.5s forwards";
      /////////////////////////////////
      const altura = parseInt(window.pageYOffset);
      console.log(altura);

      if (altura >= 500) {
        certification_log_wrap.style.animation = "down_up 1s forwards";
      }

      if (altura >= 250 && altura <= 300) {
        css.style.opacity = "0.25";
        responsive.style.opacity = "0.25";
        figma.style.opacity = "0.25";
      } else if (altura >= 301 && altura <= 330) {
        css.style.opacity = "0.5";
        responsive.style.opacity = "0.5";
        figma.style.opacity = "0.5";
      } else if (altura >= 351 && altura <= 400) {
        css.style.opacity = "0.75";
        responsive.style.opacity = "0.75";
        figma.style.opacity = "0.75";
      } else if (altura >= 401 && altura <= 875) {
        css.style.opacity = "1";
        responsive.style.opacity = "1";
        figma.style.opacity = "1";
      }
      //Pendiente revisar porque no cambia opacidad
      //Desaparicion deslizar arriba => abajo
      else if (altura <= 875) {
        css.style.opacity = "1";
        responsive.style.opacity = "1";
        figma.style.opacity = "1";
      } else if (altura >= 876 && altura <= 976) {
        css.style.opacity = "0.75";
        responsive.style.opacity = "0.75";
        figma.style.opacity = "0.75";
      } else if (altura >= 1043 && altura <= 1110) {
        css.style.opacity = "0.5";
        responsive.style.opacity = "0.5";
        figma.style.opacity = "0.5";
      } else if (altura >= 1111 && altura <= 2000) {
        css.style.opacity = "0.25";
        responsive.style.opacity = "0.25";
        figma.style.opacity = "0.25";
      }
      //Aparicion de abajo hacia arriba
      if (altura >= 1111 && altura <= 2000) {
        css.style.opacity = "0.25";
        responsive.style.opacity = "0.25";
        figma.style.opacity = "0.25";
      } else if (altura >= 1043 && altura <= 1110) {
        css.style.opacity = "0.5";
        responsive.style.opacity = "0.5";
        figma.style.opacity = "0.5";
      } else if (altura >= 876 && altura <= 976) {
        css.style.opacity = "0.75";
        responsive.style.opacity = "0.75";
        figma.style.opacity = "0.75";
      } else if (altura <= 875) {
        css.style.opacity = "1";
        responsive.style.opacity = "1";
        figma.style.opacity = "1";
      }
      ///////////////////////

      if (altura >= 1100) {
        projects_wrap.style.animation = "down_up 1s forwards";
      }
      if (altura >= 910 && altura <= 940) {
        type_blog.style.opacity = "0.25";
        contact.style.opacity = "0.25";
        three.style.opacity = "0.25";
      } else if (altura >= 941 && altura <= 976) {
        type_blog.style.opacity = "0.5";
        contact.style.opacity = "0.5";
        three.style.opacity = "0.5";
      } else if (altura >= 942 && altura <= 1043) {
        type_blog.style.opacity = "0.75";
        contact.style.opacity = "0.75";
        three.style.opacity = "0.75";
      } else if (altura >= 1044 && altura <= 1343) {
        type_blog.style.opacity = "1";
        contact.style.opacity = "1";
        three.style.opacity = "1";
      }
    });
  } else if (
    window.matchMedia("(min-width:100px)").matches &&
    window.matchMedia("(max-width:550px)").matches
  ) {
    var comprobar_css = false;
    var comprobar_camp = false;
    css.addEventListener("click", function () {
      if (comprobar_css == false || comprobar_camp == true) {
        img_camp.style.animation = "img_out 0.5s forwards";
        img_udemy.style.animation = "img_hover 0.5s forwards";
        comprobar_css = true;
        comprobar_camp = false;
      } else if (comprobar_css == true || comprobar_camp == false) {
        console.log(comprobar_css);
        img_udemy.style.animation = "img_out 0.5s forwards";
        comprobar_css = false;
      }
    });

    responsive.addEventListener("click", function () {
      comprobar_css = true;
      console.log("valor de css= " + comprobar_css);
      if (comprobar_camp == false || comprobar_css == true) {
        img_udemy.style.animation = "img_out 0.5s forwards";
        img_camp.style.animation = "img_hover 0.5s forwards";
        comprobar_camp = true;
      } else if (comprobar_camp == true || comprobar_css == false) {
        img_camp.style.animation = "img_out 0.5s forwards";
        comprobar_camp = false;
      }
    });

    window.addEventListener("scroll", function () {
      const altura = parseInt(window.pageYOffset);
      console.log(altura);
      img_perfil.style.animation = "left_right 1.5s forwards";
      social_wrap.style.animation = "right_left 1.5s forwards";
      about.style.animation = "down_up 1.5s forwards";
      if (altura >= 300) {
        css.style.animation = "right_left 1.5s forwards ";
      }

      if (altura >= 600) {
        responsive.style.animation = "left_right 1.5s forwards";
      }
      if (altura >= 900) {
        console.log("test");
        figma.style.animation = " right_left 1.5s forwards";
      }
      if (altura >= 1500) {
        type_blog.style.animation = "left_right 1.5s forwards";
      }
      if (altura >= 1800) {
        contact.style.animation = "right_left 1.5s forwards";
      }
      if (altura >= 2150) {
        three.style.animation = "left_right 1.5s forwards";
      }
    });
  }

  //
});
function newFunction(comprobar_camp) {
  comprobar_camp = true;
  return comprobar_camp;
}

function newFunction(comprobar_css) {
  comprobar_css = true;
  return comprobar_css;
}
