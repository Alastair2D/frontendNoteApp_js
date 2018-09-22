var assert = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error('Assertion Failed: ' + assertionToCheck + ' is not truthy')
    } else {
      // console.log('success');
      console.log('Assertion passed: ' + assertionToCheck + 'is truthy')
    }
  }
}



// var assert = {
//   isTrue: function(assertionToCheck, description) {
//     if(!assertionToCheck) {
//       throw new Error(`Assertion failed: ${description}. ${assertionToCheck}.`);
//     } else {
//       console.log(`Assertion passed: ${description}. ${assertionToCheck}.`);
//     }
//   }
// };
