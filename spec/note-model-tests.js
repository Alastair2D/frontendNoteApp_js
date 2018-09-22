(function (exports) {

  function test_NoteInstantiation() {
    var note = new Note('Test string')
      
      assert1.isTrue1(note === 'Test string') 
    }


  // function test_NoteTextReturn() {
  //   var note = new Note('Another test string');
     
  //   assert.isTrue(note.returnText() === 'Another test string', 'Note model: returnText() returns correct text')
  // }



  test_NoteInstantiation()
  // test_NoteTextReturn()

})(this)



  // (function (exports) {
  //   function testNoteReturn() {
  //     var note = new Note("My favorite language is Javascript", 0);
  //     assert.isTrue(note.noteText() === "My favorite language is Javascript", "Note model: noteText() returns correct text");
  //   };

  //   function testNumber() {
  //     var note = new Note("My favorite language is Javascript", 0);
  //     assert.isTrue(note.noteId() === 0, "Note model: noteId() returns correct id");
  //   };
  //   testNoteReturn();
  //   testNumber();
  // })(this);
