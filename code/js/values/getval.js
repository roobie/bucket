var global = window;
var getval = function recur(subscript, root) {

  root = (root || this) || global;

  // if subscript already is an array, just use it.
  var parts = subscript.constructor === ([]).constructor ?
    subscript : subscript.split('.');
  var nextProp = parts[0];
  var next = root[nextProp];
  if (next !== void 0) {
    if (parts.length > 1) {
      return recur(parts.slice(1), next);
    }

    return next;
  }

  return void 0;
};

var obj = { a: [ { b: 0, c: false, d: '' } ], getval: getval };

console.log('RESULT:', obj.getval('a.0.d'));
