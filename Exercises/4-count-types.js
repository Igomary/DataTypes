'use strict';


const countTypesInArray = array => {
  const collection = {};
  for (const el of array) {
    const memType = typeof(el);
    collection[memType] ? ++collection[(memType)] : collection[(memType)] = 1;
  }
  return collection;
};

module.exports = { countTypesInArray };
