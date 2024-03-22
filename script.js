const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

// Get the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add an event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    // Prevent the default link behavior
    e.preventDefault();

    // Remove the "active" class from all links
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    // Add the "active" class to the clicked link
    link.classList.add('active');

    // Navigate to the link's href attribute
    window.location.href = link.href;
  });
});


   