(function () {
  "use strict";

  /*******easy selector helper function *******/
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /*******easy event listener function *******/

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  }

  /***************** SHOW MENU ON SCROLL ******************/
  
  /*********** mobile nav-bar toggle start **********/

  on("click", ".mobile-nav-toggle", function (e) {
    select("body").classList.toggle("mobile-nav-active");
    // e.preventDefault();
    this.classList.toggle("bi-menu-button-wide-fill");
    this.classList.toggle("bi-x");
  });
  /*********** mobile nav-bar toggle end **********/

  /************ animation on scroll js start ********************/
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  /******************* animation on scroll js end *******************/

  /********  hero typing effects adding start *********/
  const typed = select(".typed");
  if (typed) {
    let typed_strings = typed.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 200,
      backSpeed: 50,
      backDelay: 2000,
    });
  }
  /********  hero typing effects adding end

  /********  hero typing effects adding end *********/
})();
