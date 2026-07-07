const header = document.querySelector("[data-header]");

const setHeaderState = () => {
  header.classList.toggle("is-solid", window.scrollY > 20);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
