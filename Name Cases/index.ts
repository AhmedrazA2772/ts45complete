// nameCases.ts
const personName: string = "Eric";

// Lowercase
console.log(personName.toLowerCase());

// Uppercase
console.log(personName.toUpperCase());

// Titlecase
const titleCaseName: string = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log(titleCaseName);
