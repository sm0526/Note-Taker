const util = require('util');
const fs = require('fs');
const uuid = require('uuid/v1');

const readingFile = util.promisify(fs.readFile);
const writingFile = util.promisify(fs.writeFile);

class Log {
    read() {
        return readingFile('db/db.json', 'utf8');
    }
    write(note) {
        return writingFile('db/db.json', JSON.stringify(note));
    }
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        });
    }
    addNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error("Cannot have a blank 'title or 'text");
        }
        const newNote = { title, text, id: uuid() };
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);
    }
    deleteNote(id) {
        return this.getNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filteredNotes) => this.write(filteredNotes));
    }
}

module.exports = new Log();