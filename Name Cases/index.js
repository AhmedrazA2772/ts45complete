// nameCases.ts
var personName = "Eric";
// Lowercase
console.log(personName.toLowerCase());
// Uppercase
console.log(personName.toUpperCase());
// Titlecase
var titleCaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log(titleCaseName);
