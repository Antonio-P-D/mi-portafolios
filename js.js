  AOS.init();

    const carrusel = document.getElementById("carrusel");
    let isDown = false;
    let startX;
    let scrollLeft;

    carrusel.addEventListener("touchstart", (e) => {
      isDown = true;
      startX = e.touches[0].pageX;
      scrollLeft = carrusel.scrollLeft;
    });

    carrusel.addEventListener("touchmove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX;
      const walk = (startX - x) * 1.5;
      carrusel.scrollLeft = scrollLeft + walk;
    });

    carrusel.addEventListener("touchend", () => {
      isDown = false;
    });

    const colorSlider = document.getElementById('colorSlider');
    
    function updateColors() {
      const value = parseInt(colorSlider.value);

      const bgStart = [26, 26, 26];
      const bgEnd = [255, 255, 255];
      const textStart = [255, 255, 255];
      const textEnd = [0, 0, 0];

      function interpolate(start, end, percent) {
        return start.map((startVal, i) =>
          Math.round(startVal + (end[i] - startVal) * (percent / 100))
        );
      }

      const bgColor = interpolate(bgStart, bgEnd, value);
      const textColor = interpolate(textStart, textEnd, value);
      const rgbBg = `rgb(${bgColor.join(',')})`;
      const rgbText = `rgb(${textColor.join(',')})`;

      document.body.style.backgroundColor = rgbBg;
      document.body.style.color = rgbText;

      document.querySelectorAll(
        'a:not(footer a), h1, h2, h3, p, span, li, .about p, .hero p, .skill-item h3'
      ).forEach(el => {
        el.style.color = rgbText;
      });

      const footer = document.querySelector('footer');
      if (footer) {
        footer.style.backgroundColor = rgbBg;
      }

      document.querySelectorAll('.skill-item p').forEach(p => {
        p.style.color = value > 70 ? '#333' : '#666';
      });
    }

    colorSlider.addEventListener('input', updateColors);
    colorSlider.addEventListener('change', updateColors);

    window.addEventListener("load", function() {
      const loader = document.getElementById("loader");
      const mainContent = document.getElementById("main-content");
      const whooshSound = document.getElementById("whooshSound");
      
      setTimeout(() => {
        loader.classList.add("fade-out");
        
      setTimeout(() => {
        mainContent.classList.add("show");
        }, 50);
      }, 2000); 
    });