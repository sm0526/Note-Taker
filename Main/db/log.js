const util = require('util');
const fs = require('fs');
const uuid = require('uuid/v1');

//need to read and write files
const readingFile = util.promisify(fs.readFile);
const writingFile = util.promisify(fs.writeFile);

class Log {
//read
    read() {

    }
//write
    write() {

    }
//get
    getNotes() {

    }
//add
    addNote() {

    }
//delete
    deleteNote() {
        
    }
}

module.exports = new Log();