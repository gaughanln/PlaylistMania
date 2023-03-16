const router = require('express').Router();
const apiroutes = require('./api');

router.use('/api', apiroutes);


router.get('/login', async (req, res) => {

    res.render('login');
});

module.exports = router;
