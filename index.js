
/**
 * Module dependencies.
 */

var exec = require('child_process').exec;

module.exports = function(file, fn){
  var cmd = 'exiftool -Orientation -Rotation -n ' + file;
  exec(cmd, function(err, stdout){
    if (err) return fn(err);

    try {
      var n = parseInt(stdout.split(':')[1], 10);
      if (3 == n) n = 180;
      if (6 == n) n = 90;
      if (8 == n) n = 270;
    } catch (err) {
      return fn(err);
    }

    fn(null, n);
  });
};
