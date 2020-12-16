"use strict";
var grades = [5, 8, 10, 9, 3.5];
var sum = 0;
for (var i = 0; i < grades.length; i++) {
    sum += grades[i];
}
console.log("sum=" + sum);
if (grades.length > 0) {
    var avg = sum / grades.length;
    console.log("avrage grade =" + avg);
}
