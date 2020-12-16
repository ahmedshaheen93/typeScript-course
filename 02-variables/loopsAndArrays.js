"use strict";
var names = ["ahmed", "ibraheem", "yousef", "omnia"];
//ordinary for
console.log("------------------------");
console.log("ordinary for");
console.log("------------------------");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//arrays is dynamic like arrayList in java
names.push("retage");
names.push("moaaz");
// enhanced for
console.log("------------------------");
console.log("enhanced for");
console.log("------------------------");
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
