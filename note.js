const fs = require('fs');

var fetchNotes = ()=>{
    try{
        var notes = fs.readFileSync('notes.json');
        return JSON.parse(notes);
    }catch (e){
        return [];
    } 
}
var saveNotes = (notes)=>{
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}
var addNotes = function(title, desc){
    var notes = fetchNotes();
    var note = {
        title: title,
        desc: desc
    };
    // filter for title unique
    var duplicates = notes.filter((note)=> note.title === title);
    // check for same title should not exist
    if(duplicates.length == 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    } 
}

var allNotes = ()=>{
    return fetchNotes();
}
var getNote = (title)=>{
    var notes = fetchNotes();
    return notes.filter((note) => note.title !== title)[0];
}

var removeNote = (title)=>{
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => note.title !== title);
    saveNotes(filterNotes);
} 
module.exports = {
    addNotes,
    allNotes,
    getNote,
    removeNote
}