// This is a separate JavaScript coding exercise with no UI interaction.
// Write a single function that takes two string inputs and returns a single string of either "TRUE"
// or "FALSE". The function should determine if the first input is equal to the second input when
// you are able to modify the first string input. The following modifications to the first string input
// are permitted: letters may be capitalized, or discarded, but otherwise not changed.

// Console.log the following examples:
// (‘ebCde’,’BCD’) TRUE
// (‘eCB’,’ECB’) TRUE (e was uppercased)
// (‘BcdEF’,’BCEF’) TRUE (c was uppercased, d was discarded)
// (‘BCD’,’BcD’) FALSE (C could not be lowercased)

// function singleFunction(first, second) {
//   let loggerFilter = [];
//   const firstFiltered = first.split("").filter((letter) => {
//     const result = second.toLowerCase().includes(letter.toLowerCase());
//     if (!result) {
//       const toLog = `${letter} was discarded`;
//       const exists = loggerFilter.find((elem) => elem === toLog);
//       if (!exists) {
//         loggerFilter.push(toLog);
//       }
//     }
//     return result;
//   });
//   for (current of firstFiltered) {
//     if (!second.includes(current)) {
//       if (!second.includes(current.toUpperCase())) {
//         const toLog = `${current} Could not be lowercased`;
//         const exists = loggerFilter.find((elem) => elem === toLog);
//         if (!exists) {
//           loggerFilter.push(toLog);
//         }
//         return `FALSE (${loggerFilter.join()})`;
//       } else {
//         const toLog = `${current} was uppercased`;
//         const exists = loggerFilter.find((elem) => elem === toLog);
//         if (!exists) {
//           loggerFilter.push(toLog);
//         }
//       }
//     }
//   }

//   return `TRUE (${loggerFilter.join()})`;
// }

// --------------------------------------------------------------------------

// console.log(singleFunction("ebCde", "BCD")); // true
// console.log(singleFunction("eCB", "ECB")); // true
// console.log(singleFunction("BcdEF", "BCEF")); // true
// console.log(singleFunction("BCD", "BcD")); // false

// ---------------------------------------------------------------------------

const chloeTest = (s1, s2) => {
  let i = 0,
    j = 0;
  while (i < s1.length) {
    if (
      s1.charAt(i) === s2.charAt(j) ||
      s1.charAt(i).toUpperCase() === s2.charAt(j)
    ) {
      j++;
      if (j === s2.length) return "TRUE";
    }
    i++;
  }

  return "FALSE";
};
// -------------------------------------------------------------------------

// function singleFunction2(first, second) {
//   const firstFiltered = first.split('')
//     .filter(letter => second.toLowerCase().includes(letter.toLowerCase()));
//   for (current of firstFiltered) {
//     if (!second.includes(current)) {
//       if (!second.includes(current.toUpperCase())) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// console.log(singleFunction2('ebCde', 'BCD')); // true
// console.log(singleFunction2('eCB', 'ECB')); // true
// console.log(singleFunction2('BcdEF', 'BCEF')); // true
// console.log(singleFunction2('BCD', 'BcD'));// false
