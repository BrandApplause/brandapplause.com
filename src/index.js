/* jshint esversion: 6 */
console.log('hello world!');
import './index.pug';

// import './index/spash.js';
import './index/contact.js';

import openService from './index/openservice.js';
window.openService = openService;