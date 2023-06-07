function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('player', {
      videoId: 'AeEPq4LYcOY',
      playerVars: {
        'autoplay': 0,
        'controls': 1,
        'showinfo': 0,
        'rel': 0,
        'modestbranding': 1
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
  
  function onPlayerReady(event) {
    // Ovdje možete dodati neku akciju koja će se izvršiti kada je player spreman
  }
  
  function onPlayerStateChange(event) {
    // Ovdje možete dodati neku akciju koja će se izvršiti kada se promijeni stanje playera
  }
  
  function loadPlayer() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  window.onload = loadPlayer;


  // checkbox

let getCheckbox = document.getElementById('myCheckbox');

getCheckbox.addEventListener('click', function(e){
  e.preventDefault();
  return false;
});

let getCheckbox1 = document.getElementById('myCheckbox1');

getCheckbox1.addEventListener('click', function(e){
  e.preventDefault();
  return false;
});

let getCheckbox2 = document.getElementById('myCheckbox2');

getCheckbox2.addEventListener('click', function(e){
  e.preventDefault();
  return false;
});


// Postavite datum i vreme kada se želi završiti countdown
var targetDate = new Date('2023-12-31T23:59:59');

// Definišite funkciju koja će ažurirati prikaz countdowna
function updateCountdown() {
  var currentDate = new Date();
  var timeDifference = targetDate - currentDate;

  // Izračunajte preostale dane, sate, minute i sekunde
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Prikazivanje countdowna u HTML elementu
  var countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';

  // Proverite da li je countdown završen
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = 'Countdown je završen!';
  }
}

// Ažurirajte countdown svaku sekundu
var countdownInterval = setInterval(updateCountdown, 1000);

// forma 
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Spriječava slanje obrasca kako bismo mogli izvršiti validaciju

  // Resetiramo prethodne greške
  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';

  // Validacija imena
  if (nameInput.value === '') {
    nameError.textContent = 'Molimo unesite vaše ime.';
  }

  // Validacija emaila
  if (emailInput.value === '') {
    emailError.textContent = 'Molimo unesite vašu email adresu.';
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = 'Molimo unesite ispravnu email adresu.';
  }

  // Validacija broja telefona
  if (phoneInput.value === '') {
    phoneError.textContent = 'Molimo unesite vaš broj telefona.';
  } else if (!isValidPhone(phoneInput.value)) {
    phoneError.textContent = 'Molimo unesite ispravan broj telefona.';
  }

  // Provjera je li forma valjana
  if (nameError.textContent === '' && emailError.textContent === '' && phoneError.textContent === '') {
    // Ovdje dodajte kod za slanje obrasca ako je forma valjana
    alert('Forma je valjana. Možete je poslati.'); // Ovo je samo primjer, zamijenite ovaj alert s vašim kodom slanja obrasca
  }
});

// Pomoćne funkcije za provjeru ispravnosti emaila i broja telefona

function isValidEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}
