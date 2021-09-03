AOS.init();

// Mobile Menu
function openNav() {
  document.getElementById("mobileMenu").style.width = "250px";
}

function closeNav() {
  document.getElementById("mobileMenu").style.width = "0";
}

// Accordion Menu
var headers = document.querySelectorAll(".panel .panel-header");

for (var i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", openCurrAccordion);
}

function openCurrAccordion(e) {
  for (var i = 0; i < headers.length; i++) {
    var parent = headers[i].parentElement;
    var panelBody = headers[i].nextElementSibling;

    if (this === headers[i] && !parent.classList.contains("open")) {
      parent.classList.add("open");
      panelBody.style.maxHeight = panelBody.scrollHeight + "px";
    } else {
      parent.classList.remove("open");
      panelBody.style.maxHeight = "0px";
    }
  }
}
