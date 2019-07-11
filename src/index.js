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
    var target = document.getElementById(link.getAttribute('href').slice(1));
    window.scrollTo({
      left: 0 + window.scrollX,
      top: target.getBoundingClientRect().top - 54 + window.scrollY, //-54px for the nav bar
      behavior: 'smooth'
    });
  })
});