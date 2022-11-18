let souq = prompt("where are you | hint : aswaq al-qurain");
let souqtt = souq;
let souqttt = souq;


console.log("the souq is " + souq );
document.getElementById("souqt").innerHTML = souq;
document.getElementById("souqtt").innerHTML = souqtt;
document.getElementById("souqttt").innerHTML = souqttt;

// function myFunction() {
//     document.getElementById("contentbg").style.backgroundColor = "#004d0a";
// }

const menu_toggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');

  menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
  });

  
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  console.log("Client Height: ", scrollContainer().clientHeight);

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);