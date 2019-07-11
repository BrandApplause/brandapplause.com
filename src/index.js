/* jshint esversion: 6 */
console.log('hello world!');
import './index.pug';

// import './index/spash.js';
import './index/client-services.js';
import './index/contact.js';

//----------Site wide JS

//---- smooth scroller
//get list of elements that link to elements with ids
var $links = Array.from(document.querySelectorAll('[href]')).filter(function(link) {
  return link.getAttribute('href').charAt(0) === '#';
});
$links.forEach(function(link) {
  //prevent page from jumping to linked element as would be normal
  link.addEventListener('click', function(ev) {
    ev.preventDefault();
  });
  //make link smoothscroll (why is this event listener 'mouseup' and the previous 'click'? because I prefer mouseup for interactable elements so the user can mouse off the element if they change their mind, and click is I think needed because thats what triggers the links behavior)
  link.addEventListener('mouseup', function() {
    var target = document.getElementById(link.getAttribute('href').slice(1)),
      targetPosition = 0;
    // test if there is no target element, ie the logo, and makes it go to the top of the page
    if (target === null) {
      targetPosition = 0
    // then test if the window is thinner than 700px, so you know if the nav bar would overlap what you were scrolling to, if it would, scroll to slightly above the element
    } else if (window.innerWidth <= 700) {
      targetPosition = target.getBoundingClientRect().top + window.scrollY;
    } else {
      targetPosition = target.getBoundingClientRect().top - 54 + window.scrollY;
    }
    window.scrollTo({
      left: 0 + window.scrollX,
      top: targetPosition,
      behavior: 'smooth'
    });
  })
});

//---- Lazy loading
import LazyLoad from "vanilla-lazyload";

const lazyLoadOptions = {elements_selector: ".lazy"};
const pageLazyLoad = new LazyLoad(lazyLoadOptions);