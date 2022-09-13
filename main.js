// Add routing in the page sidebar

window.onload = function () {
  const tab_switchers = document.querySelectorAll("[data-switcher]");

  for (let i = 0; i < tab_switchers.length; i++) {
    const tab_switcher = tab_switchers[i];
    console.log(tab_switcher);
    const page_data = tab_switcher.dataset.tab;
    console.log(page_data, "this is page data");

    tab_switcher.addEventListener("click", () => {
      document
        .querySelector(".tabs .tab.is-active")
        .classList.remove("is-active");
      tab_switcher.parentNode.classList.add("is-active");

      SwitchPage(page_data);
    });
  }

  function SwitchPage(page_data) {
    console.log(page_data);

    const current_page = document.querySelector(".pages .page.is-active");
    current_page.classList.remove("is-active");

    const next_page = document.querySelector(
      `.pages .page[data-page="${page_data}"]`
    );
    next_page.classList.add("is-active");
  }
};

// Add routing in the nav bar

var prev_handler = window.onload;
window.onload = function () {
  if (prev_handler) {
    prev_handler();
  }
  const nav_change = document.querySelectorAll("[nav-switcher]");

  for (let i = 0; i < nav_change.length; i++) {
    const nav_changer = nav_change[i];
    console.log(nav_changer);
    const page_id = nav_changer.dataset.ebn;
    console.log(page_id);

    nav_changer.addEventListener("click", () => {
      document
        .querySelector(".nav-bar .navs.when-active")
        .classList.remove("when-active");
      nav_changer.parentNode.classList.add("when-active");

      SwitchPage(page_id);
    });
  }

  function SwitchPage(page_id) {
    console.log("idugwqoudghihgwiuoh");
    console.log(page_id);

    const current_page = document.querySelector(".slides .slide.when-active");
    current_page.classList.remove("when-active");

    const next_page = document.querySelector(
      `.slides .slide[nav-page="${page_id}"]`
    );
    console.log(page_id);
    next_page.classList.add("when-active");
  }
};
