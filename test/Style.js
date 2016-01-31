var tape = require('tape');
var mjAPI = require("..//lib/mj-single.js");

tape('basic test: check MathJax core', function(t) {
    t.plan(1);

    var tex = '\\sdot'; // Other possible test candidates \\bull, \\vline
    mjAPI.start();

    mjAPI.typeset({
        math: tex,
        format: "inline-TeX",
        svg: true
    }, function(data) {
        t.equal(data.svg.indexOf("margin-"),-1, 'There should be no margins');
    });
});
