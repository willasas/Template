//Theme switch
let toggle = document.querySelector("#switch");
toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-mode");
  document.querySelectorAll(".inverted").forEach((res) => {
    res.classList.toggle("invert");
  });
});