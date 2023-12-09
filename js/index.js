// favicon
var counter		    = 1;
var NumberOfPics	= 2 + 1;
var nodeFavicon		= document.getElementsByTagName("link");
 
function animateFavicon() {
 //console.log(counter); // для отладки счётчика в консоли
    for (var i = 0; i < nodeFavicon.length; i++)
    {
      if( (nodeFavicon[i].getAttribute("rel") == "icon") || (nodeFavicon[i].getAttribute("rel") == "shortcut icon"))
      {
			  nodeFavicon[i].setAttribute("href", "./img/favicon/" + counter + ".png");
      }
    }
 if (counter < NumberOfPics) {
  setTimeout(animateFavicon, 5000);
  counter++;
  if (counter == NumberOfPics) { counter = 1; }
 }
}
 
animateFavicon();
// show more

const moreBtn = document.querySelector('.gallery__button');
const podcastItem = document.querySelectorAll('.gallery__item');

moreBtn.addEventListener('click', function () {
  podcastItem.forEach(el => {
    el.classList.add('gallery__item--visible');
  });
  moreBtn.closest('.gallery__button').classList.add('gallery__button--hidden');
});