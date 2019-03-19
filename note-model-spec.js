function checkingNotesModel(){
  var note = new Note("abc");
  assert.isTrue(note.showText() === "abc");
}

checkingNotesModel()
