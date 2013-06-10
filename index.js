
/**
 * Module dependencies.
 */

var exec = require('child_process').exec;

var orientations = [
  { op: 'none', degrees: 0 },
  { op: 'flip-x', degrees: 0 },
  { op: 'none', degrees: 180 },
  { op: 'flip-y', degrees: 0 },
  { op: 'flip-x', degrees: 90 },
  { op: 'none', degrees: 90 },
  { op: 'flip-x', degrees: -90 },
  { op: 'none', degrees: -90 }
];

module.exports = function(file, fn){
  var cmd = 'exiftool -Orientation -n ' + file;
  exec(cmd, function(err, stdout){
    if (err) return fn(err);

    try {
      var n = parseInt(stdout.split(':')[1], 10);
      var o = orientations[n - 1] || {};
      o.type = n;
    } catch (err) {
      return fn(err);
    }

    fn(null, o);
  });
};
