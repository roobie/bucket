// get the specified query parameter with a simple regex
var match = (/queryParameterName=([^&]*)&?/i).exec(location.href);

// example:
var urlPart = "/foo/bar/baz.json?ID=9";
var match = (/id=([^&]*)&?/i).exec(urlPart);
// match =~= ["ID=9", "9"]


var getQueryParameter = function (key, /** @optional */fromURL) {
  // match the `key` next to a `=` that is followed by a group
  // which can contain anythin but a `&`. Query string might
  // terminate in a `&` that is not followed by anything
  // so end with `&?`.
  var re = key + '=([^&]*)&?';
  var url = fromURL || location.search;
  // remove the hash, if any.
  url = url.split('#')[0];
  var match = new RegExp(re, 'i').exec(url)
  return {
    key: key,
    value: match[1],
    pair: match[0]
  }
}
