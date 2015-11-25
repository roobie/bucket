var memoizeUnary = function(func) {
  var cache = {};
  return function(key) {
    if (!(key in cache)) {
      cache[key] = func(key);
    }

    return cache[key];
  };
};
