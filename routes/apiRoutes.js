const router = require('express').Router();
const log = require('../db/log');

router.get('/notes', (req, res) => {
    log 
      .getNotes()
      .then((notes) => {
        return res.json(notes);
      })
      .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    log
      .addNote(req.body)
      .then((note) => res.json(note))
      .catch((err) => res.status(500).json(err));
});

router.delete('/notes/:id', (req, res) => {
    log
      .deleteNote(req.params.id)
      .then(() => res.json({ ok: true }))
      .catch((err) => res.status(500).json(err));
});

module.exports = router;