var tape = require('tape');
var mjAPI = require("..//lib/mj-single.js");

tape('basic test: check MathJax core', function(t) {
  t.plan(1);

  var tex = '\\displaystyle{\\begin{smallmatrix}a\\end{smallmatrix}}';
  mjAPI.start();

  mjAPI.typeset({
    math: tex,
    format: "inline-TeX",
    mml: true
  }, function(data) {
      console.log(data.mml);
    t.ok(data.mml.indexOf("scriptlevel=\"0\"")>0, 'MathJax renders smallmatrix.');
  });
});
