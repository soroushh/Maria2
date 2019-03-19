(function (exports) {
  function NoteList(Note){
    this.Note = Note;
    this.array = [];
  }
  NoteList.prototype.create = function (text) {
    this.array.push(new this.Note(text));
  };
  NoteList.prototype.showAllNotes = function(){
    return(this.array);
  }
  exports.NoteList = NoteList;
})(this);
