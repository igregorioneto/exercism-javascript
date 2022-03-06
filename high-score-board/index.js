const params = {
    score: 45,
    normalizeFunction: function (score) {
      return score * 3 - 10;
    },
};

console.log(params)