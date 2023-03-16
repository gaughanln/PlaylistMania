const router = require('express').Router();
const apiroutes = require('./api');

router.use('/api', apiroutes);


router.get('/login', async (req, res) => {
    //res.send("test");
    res.render('partials/home-header.handlebars');
});

module.exports = router;
