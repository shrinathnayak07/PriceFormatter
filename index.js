'use strict';

/**
 * Adds commas to a number
 * @param {price} number
 * @return {string}
 */

module.exports = function priceformatter(price) {
  if (price != null || price != 0) {
    if (!isNaN(price)) {
      let val = 0;
      if (price) {
        if (price >= 10000000) {
          val = `${(price / 10000000).toFixed(2)}Cr`;
        } else if (price >= 100000) {
          val = `${(price / 100000).toFixed(2)}L`;
        } else if (price > 1000) {
          val = `${(price / 1000).toFixed(2)}K`;;
        } else if (price === 0) {
          val = '0';
        } else {
          val = price;
        }
      }
      return '₹' + val;
    }
  }
  return NaN;
};

