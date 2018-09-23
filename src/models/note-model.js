(function (exports) {

  function Note(string, id) {
    this._text = string
    this._id = id
  }

  Note.prototype.returnText = function () {
    return this._text
  } 


  Note.prototype.returnID = function () {
    return this._id;
  };


  exports.Note = Note;
})(this);  
