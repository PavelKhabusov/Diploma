import modal from './parts/modal';
import form from './parts/form';
import calc_tabs from './parts/calc_tabs';
import tabs from './parts/tabs';
import calc from './parts/calc';
import timer from './parts/timer';
import lightbox from './parts/lightbox';
if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
window.addEventListener('DOMContentLoaded', () => {
  
  'use strict';

  modal();
  form();
  calc_tabs();
  tabs();
  calc();
  timer();
  lightbox();
});