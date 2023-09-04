// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //active section for animation scroll
            sec.classList.add('show-animate');
        }
        // use animation that repeats on scroll
        else {
            sec.classList.remove('show-animate');
        }
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click links or scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //footer animation
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

}

//light to dark

let lightModeIcon = document.querySelector('#lightMode-icon');

lightModeIcon.onclick = () => {
  lightModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');

}

//speak
document.getElementById("speak")
.addEventListener("click", ()=>{
    var msg = "Hello, I'm Andrei Dominick A. Randall, a web developer. Twenty-four years old, nice to meet you. ";
    const utterance = new SpeechSynthesisUtterance(msg);
    speechSynthesis.speak(utterance);
})

//swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });