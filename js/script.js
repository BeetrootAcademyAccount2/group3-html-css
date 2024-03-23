const navBtn = document.querySelector(".navbar-list__collapsed-menu-btn");
const navLinkList = document.querySelector(".navbar-list");

navBtn.addEventListener("click", () => {
  navLinkList.classList.toggle("navbar-list--mobile-display");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 599)
    navLinkList.classList.remove("navbar-list--mobile-display");
});
