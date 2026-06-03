const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.navlist');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});


//mode lit and dark

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  
  if (current === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌙 Dark-mode';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️Lite-mode';
  }
});


//remember mode upon refresh
 // ── Typewriter (demo 4) ──
  const words = ['Full-Stack Developer', 'UI/UX Designer', 'Graphic Designer', ];
  let wIdx = 0, cIdx = 0, deleting = false;
  const target = document.getElementById('type-target');

  function type() {
    const word = words[wIdx];
    if (!deleting) {
      target.innerHTML = word.slice(0, cIdx + 1) + '<span class="cursor"></span>';
      cIdx++;
      if (cIdx === word.length) { deleting = true; setTimeout(type, 1600); return; }
      setTimeout(type, 90);
    } else {
      target.innerHTML = word.slice(0, cIdx - 1) + '<span class="cursor"></span>';
      cIdx--;
      if (cIdx === 0) {
        deleting = false;
        wIdx = (wIdx + 1) % words.length;
        setTimeout(type, 350);
        return;
      }
      setTimeout(type, 55);
    }
  }
  type();


//popup card
  function showPopup(){

    document.getElementById("popup").style.display = "flex";

}

function closePopup(){

    document.getElementById("popup").style.display = "none";

}

//hidden card
  function showhidden(){

    document.getElementById("hidden").style.display = "flex";

}

function closehidden(){

    document.getElementById("hidden").style.display = "none";

}