//
// Get computed styles
//

'use strict';

function Styles() {

  // API
  this.style = function(property) {
    var style = getComputedStyle(document.body);
    var propertyValye = style.getPropertyValue(property);

    if (propertyValye) {
      return propertyValye.trim();
    } else {
      return 'undefined';
    }
  }
  this.colors = function() {
    var colors = {
      gray: {
        50: this.style('--x-gray-50'),
        100: this.style('--x-gray-100'),
        200: this.style('--x-gray-200'),
        300: this.style('--x-gray-300'),
        400: this.style('--x-gray-400'),
        500: this.style('--x-gray-500'),
        600: this.style('--x-gray-600'),
        700: this.style('--x-gray-700'),
        800: this.style('--x-gray-800'),
        900: this.style('--x-gray-900')
      },
      theme: {
        'primary': this.style('--x-primary'),
        'primarySubtle': this.style('--x-primary-subtle'),
        'secondary': this.style('--x-secondary'),
        'tertiary': this.style('--x-tertiary'),
        'info': this.style('--x-info'),
        'success': this.style('--x-success'),
        'danger': this.style('--x-danger'),
        'warning': this.style('--x-warning'),
        'light': this.style('--x-light'),
        'dark': this.style('--x-dark')
      },
      transparent: 'transparent',
      'body': {
        'color': this.style('--x-body-color'),
        'fontSize': this.style('--x-body-font-size'),
      },
      'border': {
        'width': this.style('--x-border-width'),
        'color': this.style('--x-border-color')
      }
    }
    return colors;
  }

  this.fonts = function() {
    var fonts = {
      base: this.style('--x-font-sans-serif'),
      code: this.style('--x-font-monospace'),
      serif: this.style('--x-font-serif')
    }
    return fonts;
  }
}

module.exports = Styles;
