const router = require('express').Router();
const { Song, PlaylistSong, Playlist } = require('../../models');

router.post('/')