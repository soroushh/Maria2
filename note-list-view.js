(function (exports) {
  function NoteListView(NoteList){
    this.NoteList = NoteList;
  }
  NoteListView.prototype.noteListString = function() {
    htmlString ="<ul>"
    this.NoteList.showAllNotes().forEach(function(note){
      htmlString = htmlString + "<li><div>"+note.showText() +"</div></li>";
    });
    htmlString = htmlString + "</ul>";
    return(htmlString);
  }


  exports.NoteListView = NoteListView;
})(this);