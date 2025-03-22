document.addEventListener("DOMContentLoaded", function() {
    window.flippages = function() {
      if (window.innerWidth <= 768) {
        var signInPage = document.querySelector('.page.one');
        var signUpPage = document.querySelector('.page.two');
        if (signInPage.classList.contains('active')) {
          signInPage.classList.remove('active');
          signUpPage.classList.add('active');
        } else {
          signUpPage.classList.remove('active');
          signInPage.classList.add('active');
        }
      } else {
        document.getElementById("pages").classList.toggle("flip");
      }
    }
  });
  