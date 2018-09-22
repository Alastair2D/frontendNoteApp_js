(function (exports) {
  function test_NoteTakesAnArgument() {
    var note = new Note('test string');

    if (note._text !== 'test string') {
      throw new Error('Test failed: note._text is empty')
    } else {
      console.log('Test passed: Note correctly instantiated.')
    }
  }
    test_NoteTakesAnArgument();
  })(this);


(function (exports) {
  function test_NoteReturnsText() {
    var note = new Note('My first note');

    if (note.returnText() !== 'My first note') {
      throw new Error('Test failed. note.returnText() not working')
    } else {
      console.log('Test passed. returnText worked.');
    }
  }

  test_NoteReturnsText();
})(this);


// (function (exports) {
//   function testHasID() {
//     var note = new Note('This is a note', 1);

//     if (note.returnID()) {
//       console.log('Test Passed: Note has an ID')
//     } else {
//       throw new Error('Test failed: Note does not have an ID');
//     }
//   }

//   test_NoteHasID();
// })(this);
