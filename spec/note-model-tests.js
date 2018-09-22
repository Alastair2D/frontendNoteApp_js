// Write a test for instantiation of a new note

(function (exports) {

  function test_NoteInstantiation() {
    var note = new Note('Test string')
      
      assert.isTrue(note) === 'Test string'
    }

  test_NoteInstantiation()

})(this)




// (function (exports) {

//   function testNoteInstantiation() {
//     var note = new Note("Test note");
//     assert.isTrue(note.textReturn() === "Test note")
//   };

//   testNoteInstantiation();

// })(this);