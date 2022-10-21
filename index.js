const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   tutorials.map (title =>
//     for (let char of title) {
//       if (typeof char === "string") {   // character cannot be a number or symbol
//         if (title[0] = char) {    // very first character is capitalized
//           char.toUpperCase();
//         }
//         else if (char = "") {    // character after a space is capitalized
//           let toCapitalize = title.indexOf(char)+1;   // find index of the word to capitalize
//           title[toCapitalize].toUpperCase();
//         }
//         else {
//           continue; // skip through other characters 
//         }
//       }
      
//   return tutorials)
// }




const capitalize = tutorials.map(title => {
  let words = title.split(' ')
  let capitalize = words.map ( word =>
   word[0].toUpperCase() + word.slice(1))
 let newTitle = capitalize.join(' ')
 return newTitle})




const titleCased = () => {
  return capitalize
}
 
