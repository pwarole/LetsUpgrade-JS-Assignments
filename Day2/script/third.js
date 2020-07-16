//String Examples and Methods
var name  = "LetsUpgrade";
var length = name.length;
console.log(length);

var string = "Hello This is LetsUpgrade Course For Javascript";
console.log(string.indexOf("LetsUpgrade"));
console.log(string.search("LetsUpgrade"));

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);

var sub = str.substring(7, 13);
console.log(sub);
console.log(str);
var text1 = "Hello World!";
var text2 = text1.toUpperCase();
console.log(text2);
console.log(text2.toLowerCase());
console.log(text1.concat("LetsUpgrade"));
console.log(text1.charAt(0));
var a = string.split(" ");
console.log(a[0]);
var str1 = "Hello World";
str1 = str1.replace("World","LetsUpgrade");
console.log(str1);
console.log(str1.charCodeAt(0));
