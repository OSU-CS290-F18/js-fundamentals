console.log("Hello world!");

console.log("\n=================");
console.log("== Variables");
console.log("=================\n");

var someVariableName;

var i = 8.23234;

// var str = "cat";

console.log("\n=================");
console.log("== Numbers");
console.log("=================\n");

console.log("9 / 5 = ", 9 / 5);

console.log("\n=================");
console.log("== Comparisons");
console.log("=================\n");

console.log("2 == 4 ?", 2 == 4);
console.log("2 == 2 ?", 2 == 2);
console.log("2 == '2' ?", 2 == '2');
console.log("2 == '3' ?", 2 == '3');

console.log("2 === '2' ?", 2 === '2');
console.log("2 !== '2' ?", 2 !== '2');
console.log("2 != '2' ?", 2 != '2');

if ("") {
  console.log("The string was truthy");
} else {
  console.log("The string was falsy");
}

console.log("\n=================");
console.log("== Strings");
console.log("=================\n");

var str1 = "cat says:";
var str2 = 'cat says:';
var meowStr = "meow";
console.log(str1 + " " + meowStr);
console.log(str2 + " " + meowStr);

var num = 8;
var sum = "4 + 4 = " + 8;
console.log("sum: ", sum);

var parsedInt = parseInt("8");

console.log("'decathlon'.indexOf('cat'):", 'decathlon'.indexOf('cat'))
console.log("'team'.indexOf('i'):", 'team'.indexOf('i'));

var team = "team";
console.log("team.indexOf('i'):", team.indexOf('i'));

console.log("'I love dogs'.replace('dog', 'cat':", 'I love dogs'.replace('dog', 'cat'));

var empty = "";

console.log("\n=================");
console.log("== Arrays");
console.log("=================\n");

var arr = [ 1, 2, 3 ];
console.log("arr:", arr);

var arr2 = [ 1, true, "three", [ 1, 2, 3 ] ];
console.log("arr2:", arr2);

for (var j = 0; j < arr2.length; j++) {
  console.log("arr2[" + j + "]:", arr2[j]);
}

arr2.forEach(function (elem) {
  console.log("This is happening for each element in the array:", elem);
});
