const router = require('express').Router();
const apiroutes = require('./api');

router.use('/api', apiroutes);


router.get('/', async (req, res) => {

    const logoOnlyHeader = '<p>TEST TEST TEST</p>';
    res.render('login', {logoOnlyHeader});
});

module.exports = router;
