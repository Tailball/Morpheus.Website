const express = require('express');
const router = express.Router();

///
///GET api/test
///
router.get('/', (req, res) => {
    res.send('hello from api/test');
});


///
///POST api/test
///
router.post('/', (req, res) => {
    res.send('hello from api/test + ' + JSON.stringify(req.body));
});


module.exports = router;