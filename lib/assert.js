
var assert = {
  isTrue: function(assertionToCheck, description) {
    if(!assertionToCheck) {
      throw new Error(`Assertion failed: ${description}. ${assertionToCheck}.`);
    } else {
      console.log(`Assertion passed: ${description}. ${assertionToCheck}.`);
    }
  }
};

// var assert1 = {
//   isTrue: function (assertionToCheck) {
//     if (!assertionToCheck) {
//       throw new Error('Test FAILED. ' + assertionToCheck)
//     } else {
//       // console.log('Test PASSED');
//       console.log('Test PASSED. ' + assertionToCheck + ' is truthy')
//     }
//   }
// };


var assertE = {
  isTrue: function (description, assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error('Test failed: ' + assertionToCheck + 'is not truthy');
    } else {
      console.log(`Test passed:  ${description}`);
    }
  }
}
