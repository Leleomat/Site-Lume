window.addEventListener("scroll", function () {
    const footer = document.getElementById("footer");
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= docHeight - 50) {
      footer.style.opacity = "1";
    } else {
      footer.style.opacity = "0";
    }
  });