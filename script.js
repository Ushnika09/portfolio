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


const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["Full Stack Developer", "Web Developer", "Fron-end Developer", "Back-end Developer", "MERN Stack Developer", "Learner"];


const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex <textArray[textArrayIndex].length){
    typedTextSpan.textContent+=textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }else{
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if(charIndex>0){
    typedTextSpan.textContent =textArray[textArrayIndex].substring(0,charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }else{
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});