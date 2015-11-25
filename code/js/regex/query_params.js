// get the specified query parameter with a simple regex
var match = (/queryParameterName=([^&]*)&?/i).exec(location.href);

// example:
var urlPart = "/foo/bar/baz.json?ID=9";
var match = (/id=([^&]*)&?/i).exec(urlPart);
// match =~= ["ID=9", "9"]
