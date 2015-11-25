
var htmlFn = function () { "use strict"; /**@preserve
  <div id="template1">
    <span>hello from template</span>
  </div>
*/};

var html = htmlFn.toString()
  .replace('function () { "use strict"; /**@preserve', '')
  .replace('*/}', '');

console.log(html);
