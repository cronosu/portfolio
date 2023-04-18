window.addEventListener('load', function() {
let etoile = document.getElementsByClassName("etoile");

function  entierAleatoire(min, max)
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


document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    
    window.scrollBy(-10, 0);
  } else if (event.key === 'ArrowLeft') {

    window.scrollBy(10, 0);
  }
});


document.addEventListener("scroll", function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var topValue = 1 + scrollTop + "%"; // Remplacez 1 par la valeur de "top" initiale souhaitée
  document.querySelector(".element").style.top = topValue;
});

console.log(window.pageYOffset);





