console.log('checking for ie');
Modernizr.load(
  // Presentational polyfills
  {
    test : Modernizr.input.placeholder,
    nope : 'js/lib/jquery-placeholder-shim.js'
});