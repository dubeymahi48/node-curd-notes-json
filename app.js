var notes = require('./note.js');

notes.addNotes("php","strong language");
 notes.addNotes("javascript","strong language as well, its working on frontend and backed both");
notes.addNotes("php","strong language");
notes.addNotes("Laravel","Php framework");
notes.addNotes("Angular","js frontent framework");
notes.removeNote('php');
var allNotes = notes.allNotes();
var getNote = notes.getNote('Angular');

console.log("get note",getNote);
console.log("all notes",allNotes);
