function Statistics(...args) {
  if (args.length === 0) {
    throw new Error('Statistics constructor takes no inputs');
  }
  this.mean = function (numbers) {
    let average = 0;
    numbers.forEach((x) => {
      average += x;
    });
    return average / numbers.length;
  };
}

p5.prototype.statistics = function (...args) {
  return new Statistics(args);
};

module.exports = p5;
