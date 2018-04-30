

function track(a, l) {
    var num = 0;
    for (var i = 0; i <= a.length; i++) {

        if (a[i] === l) {

            num = num + 1;

        }
    } return num;
}

var a = "random stvar";

var l = "m";

var result = track(a, l);

console.log(result);

