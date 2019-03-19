function checkingNotesModelList(){
  counter = 0;
  var NoteClassDouble = function(){
    counter += 1 ;
  }
  var notelist = new NoteList(NoteClassDouble);
  notelist.create("abc");
  console.log(counter);
  assert.isTrue(counter === 1);
}

function checkingAllNotesArray(){
  var NoteClassDouble = function(){
  }
  var notelist = new NoteList(NoteClassDouble);
  notelist.create("abc");
  notelist.create("def")
  assert.isTrue(notelist.showAllNotes().length === 2);
}

checkingNotesModelList()
checkingAllNotesArray()
