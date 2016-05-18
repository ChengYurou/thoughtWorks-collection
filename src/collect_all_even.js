'use strict';

function collect_all_even(collection) {
  var newCollection = [];

  collection.forEach(function (item) {
    if(item%2 === 0) {
      newCollection.push(item);
    }
  });

  return newCollection;
}

module.exports = collect_all_even;
