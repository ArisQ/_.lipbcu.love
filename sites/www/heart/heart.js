
function x(t) {
    var st = Math.sin(t);
    return 16 * st * st * st;
}

function y(t) {
    var cos = Math.cos;
    return 13*cos(t) - 5*cos(2*t) - 2*cos(3*t) - cos(4*t);
}
//x=16*sin(t)^3
//y=12cos(t) - 5cos(2t)-2cos(3t)-cos(4t)

var scale = 6;
function tx(t) {
    return 20 + scale * (16 + x(t));
}
function ty(t) {
    return scale * (21 - y(t));
}

var c = document.getElementById("heart");
var ctx = c.getContext("2d");
var i = 0;
ctx.moveTo(tx(i), ty(i));
var t = window.setInterval(() => {
    i+=0.01;
    ctx.lineTo(tx(i), ty(i));
    ctx.stroke();
    if(i>2*Math.PI) {
        window.clearInterval(t);
    }
}, 0.01);

