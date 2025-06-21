document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("#nav-menu");

  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, 3000); // Change slide every 3 seconds



  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.booking-form');
  const message = document.getElementById('form-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Send form data using fetch to Formspree or your backend
    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        message.style.display = 'block';
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    }).catch(error => {
      alert('Error submitting form.');
    });
  });
});

  });
});
