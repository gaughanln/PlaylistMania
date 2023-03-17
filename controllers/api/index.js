const router = require('express').Router();
const playlistRoutes = require('./playlist-routes');
const playlistSongRoutes = require('./playlistSong-routes');
const songRoutes = require('./song-routes');
const userRoutes = require('./user-routes');

router.use('/playlist', playlistRoutes);
router.use('/playlistSongs', playlistSongRoutes);
router.use('/songs', songRoutes);
router.use('/users', userRoutes);

module.exports = router;

