
var orientation = require('./');

orientation('example.jpg', function(err, n){
  if (err) throw err;
  console.log(n);
});

orientation('example.mov', function(err, n){
  if (err) throw err;
  console.log(n);
});
