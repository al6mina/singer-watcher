//third
//---------- page 404
function ifNotConnection() {
  var win404 = window.open('404/404.html', '_self');
  return;
}

//-------------addeventListener for all browsers
function addListener(elem, evType, fn) {
    if (window.attachEvent === true) {
      elem.addEventListener(evType, fn, false);
      return fn;
    }
    var newFn = function () {
      fn.call(elem);
    };
      elem.attachEvent('on' + evType, newFn);
    return newFn;
  }