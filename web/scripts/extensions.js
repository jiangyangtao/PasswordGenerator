if (!Math.createRandom) {
  Object.defineProperty(Math, 'createRandom', {
    value: function createRandom(min, max) {
      if (this === undefined || this === null) throw new TypeError();
      if (!min || typeof min !== 'number') min = 0;
      if (!max || typeof max !== 'number') max = 100;
      return Math.floor(Math.random() * ((max - min) + 1)) + min;
    },
  });
}