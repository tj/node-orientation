
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
    } catch (err) {
      return fn(err);
    }

    fn(null, n);
  });
};
