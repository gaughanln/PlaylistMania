const router = require('express').Router();
const playlistRoutes = require('./category-routes');
const playlistSongRoutes = require('./product-routes');
const songRoutes = require('./tag-routes');
const userRoutes = require('./user-routes');

router.use('/playlist', playlistRoutes);
router.use('/playlistSongs', playlistSongRoutes);
router.use('/songs', songRoutes);
router.use('/users', userRoutes);

module.exports = router;
