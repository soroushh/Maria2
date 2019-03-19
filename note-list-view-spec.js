function checkingListView(){
  var note1double = {
    showText: function(){
      return("abc");
    }
  }
  var note2double = {
    showText: function(){
      return("def");
    }
  }
  var noteListDouble = {
    showAllNotes: function(){
      return [ note1double , note2double];
    }
  }
  noteListView = new NoteListView(noteListDouble);
  console.log(noteListView.noteListString())
  assert.isTrue(noteListView.noteListString() === "<ul><li><div>abc</div></li><li><div>def</div></li></ul>")
}

checkingListView()
