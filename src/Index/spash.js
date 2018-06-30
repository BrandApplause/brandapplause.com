
/* jshint esversion: 6 */
const imgElem = document.querySelector('.trace-image');
const preloadImgElem = imgElem.querySelector('.trace-svg');

import { src, trace } from '!!image-trace-loader?background=#DDD!../assets/large/splash.jpg';
// import { src, trace } from '../assets/large/splash.jpg';

preloadImgElem.setAttribute('src', trace);

const imgNode = new Image();
imgNode.src = src;

imgNode.onload = function() {
  imgElem.classList.add('loaded');
  imgElem.style.backgroundImage = `url(${src})`;
};
