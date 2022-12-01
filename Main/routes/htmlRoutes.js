const router = require('express').Router();


router.get('/', (req, res) => {
    //need to send to public in html file -> notes
});

router.get('*', (req, res) => {
    //need to send remaining to public in seperate html file -> index
});

module.exports = router;