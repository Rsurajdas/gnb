const tabHeads = document.querySelectorAll(".tab__head");
const tabBodys = document.querySelectorAll(".tab__content");

tabHeads.forEach((head, idx) => {
  head.addEventListener("click", () => {
    tabHeads.forEach((head) => head.classList.remove("active"));
    head.classList.add("active");
    tabBodys.forEach((body) => {
      body.classList.remove("active");
    });
    tabBodys[idx].classList.add("active");
  });
});
