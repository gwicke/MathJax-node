var tape = require('tape');
var mjAPI = require("..//lib/mj-single.js");

tape('basic test: check MathJax core', function(t) {
    t.plan(1);

    var tex = '\\sin\\arcsin x-\\dim\\ker V';
    mjAPI.start();

    mjAPI.typeset({
        math: tex,
        format: "inline-TeX",
        mml: true
    }, function(data) {
        t.ok(data.mml.match(/x2061/).length=4,'Spaces between subsequent operators');
    });
});
