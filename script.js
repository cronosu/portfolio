window.addEventListener('load', function() {
let etoile = document.getElementsByClassName("etoile");

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
};

for (let i = 0; i < etoile.length; i++) {
  etoile[i].style.left = entierAleatoire(-49, 49) + "%";
  etoile[i].style.bottom = entierAleatoire(-49, 49) + "%";
  console.log(etoile[i].style.left + " " + etoile[i].style.bottom);
  
};
console.log(etoile.length);
});

