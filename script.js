const toggleBtn = document.querySelector(".theme-toggle");
const tooggleIcon = document.querySelector("#theme-icon");

const theme = localStorage.getItem("theme");
if (theme === "light") {
  document.body.classList.add("light-theme");
  tooggleIcon.classList.remove("fa-moon");
  tooggleIcon.classList.add("fa-sun");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    tooggleIcon.classList.remove("fa-moon");
    tooggleIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    tooggleIcon.classList.remove("fa-sun");
    tooggleIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "dark");
  }
});
