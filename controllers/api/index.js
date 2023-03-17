const router = require('express').Router();
const userRoutes = require('./userRoutes');

const homepage = require('./homepage');

router.use('/users', userRoutes);
router.use('/app', homepage);

module.exports = router;