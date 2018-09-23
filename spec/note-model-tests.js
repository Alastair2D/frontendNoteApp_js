(function (exports) {
  function test_NoteTakesAnArgument() {
    var note = new Note('test string');

    if (note._text !== 'test string') {
      throw new Error('Test failed: note._text is empty')
    } else {
      console.log('Test passed: Note correctly instantiated')
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
      console.log('Test passed: returnText returns note text');
    }
  }
  test_NoteReturnsText();
})(this);


(function (exports) {
  function test_NoteHasAnID() {
    var note = new Note('This is a note', 1);

    if (note.returnID()) {
      console.log('Test passed: Note has an ID')
    } else {
      throw new Error('Test failed: Note does not have an ID');
    }
  }
  test_NoteHasAnID();
})(this);


(function (exports) {
  function test_NoteReturn() {
    var note = new Note("My favorite language is Javascript", 0);
    assert.isTrue(note.returnText() === "My favorite language is Javascript", "Note model: noteText() returns correct text");
  };

  function test_NoteID() {
    var note = new Note("My favorite language is Javascript", 0);
    assertE.isTrue(note.returnID() === 0, "Note model: noteId() returns correct id");
  };
  test_NoteReturn();
  test_NoteID();
})(this);
