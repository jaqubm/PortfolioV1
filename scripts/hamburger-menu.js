hamburgerMenu = document.querySelector(".hamburger-menu");
navBar = document.querySelector(".nav-menu");

homeButton = document.getElementById("home-button");
aboutMeButton = document.getElementById("about-me-button");
portfolioButton = document.getElementById("portfolio-button");
contactButton = document.getElementById("contact-button");
cvDownload = document.getElementById("cv-download");

hamburgerMenu.onclick = function() {
  console.log("active");
  navBar.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
}

homeButton.onclick = function() {
  navBar.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  document.getElementById("home").scrollIntoView();
}

aboutMeButton.onclick = function() {
  navBar.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  document.getElementById("about-me").scrollIntoView();
}

portfolioButton.onclick = function() {
  navBar.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  //document.getElementById("portfolio").scrollIntoView();
}

contactButton.onclick = function() {
  navBar.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  //document.getElementById("contact").scrollIntoView();
}

cvDownload.onclick = function() {
  navBar.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
}