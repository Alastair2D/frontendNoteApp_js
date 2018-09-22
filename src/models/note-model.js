(function (exports) {

  function Note(string) {
    this._text = string
  }

  Note.prototype.returnText = function () {
    return this._text
  } 


  // Note.prototype.noteId = function () {
  //   return this.id;
  // };


  exports.Note = Note;
})(this);  
