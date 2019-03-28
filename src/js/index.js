import modal from './parts/modal';
import popup from './parts/popup';
import form from './parts/form';
if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
window.addEventListener('DOMContentLoaded', function() {
  
  'use strict';

  modal();
  popup();
  form();
});