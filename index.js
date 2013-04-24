
/**
 * Module dependencies.
 */

var exec = require('child_process').exec;

var map = {
  1: 0,
  3: 180,
  6: 90,
  8: 270
}

module.exports = function(file, fn){
  var cmd = 'exiftool -Orientation -Rotation -n ' + file;
  exec(cmd, function(err, stdout){
    if (err) return fn(err);

    try {
      var n = parseInt(stdout.split(':')[1], 10);
      n = map[n] || 0;
    } catch (err) {
      return fn(err);
    }

    fn(null, n);
  });
};
