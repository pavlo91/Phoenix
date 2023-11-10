//
// Datepicker
// using the Flatpickr plugin
//

'use strict';

// import Choices from "choices.js";

module.exports = function choicesPlugin() {
  this.init = function(el) {
    const items = [{
        value: 'Value 1',
        label: '<img src="/img/crypto/bitcoin.svg" class="w-rem-6 h-rem-6 me-2" /> Bitcoin',
        id: 1
      },
      {
        value: 'Value 2',
        label: 'Label 2',
        id: 2,
        customProperties: {
          random: 'I am a custom property'
        }
      }]

    const options = {
      choices: items,
      allowHTML: true
    }
    const choices = new Choices('.js-choice', options);


  }


}
