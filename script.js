$('a[href^="#"]').click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
});

// typing animation script
var typed = new Typed(".typing", {
strings: ["Découvrez mon profil", "Discover my profile", "Entdecken Sie mein Profil", "Scopri il mio profilo", "Descubre mi perfil", "اكتشف ملف التعريف الخاص بي"],
typeSpeed: 30,
backSpeed: 50,
loop: true
});

