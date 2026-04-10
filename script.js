var elemC = document.querySelector(".elem-container");
var fixed = document.querySelector("#fixed-image");

elemC.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});

elemC.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
  });
});




const itemHeader = document.querySelectorAll(".accordion-item-header");

itemHeader.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    const activeAccordion = document.querySelector(
      ".accordion-item-header.active"
    );

    // 🔹 Close previous
    if (activeAccordion && activeAccordion !== accordion) {
      activeAccordion.classList.remove("active");
      activeAccordion.nextElementSibling.style.maxHeight = 0;

      const prevBox = activeAccordion.closest(".faq-box");
      prevBox.style.background = "black";
      prevBox.style.backdropFilter = "blur(0px)";

      const prevIcon = activeAccordion.querySelector(".icon");
      prevIcon.style.background = "#151515";
    }

    // 🔹 Toggle current
    accordion.classList.toggle("active");

    const content = accordion.nextElementSibling;
    const box = accordion.closest(".faq-box");
    const icon = accordion.querySelector(".icon");

    if (accordion.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";

      // ✅ BG effect
      box.style.background = `
        radial-gradient(circle at bottom right, rgba(132, 255, 0, 0.25), transparent 60%),
        black
      `;
      box.style.backdropFilter = "blur(20px)";

      // ✅ Icon lime
      icon.style.background = "#84cc16";
    } else {
      content.style.maxHeight = 0;

      // 🔻 Reset
      box.style.background = "black";
      box.style.backdropFilter = "blur(0px)";
      icon.style.background = "#151515";
    }
  });
});