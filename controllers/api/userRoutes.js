const router = require('express').Router();
const User = require('../../models');


//delete later
// router.get('/', async (req, res) => {
//     res.send("Test Test");
// });

router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create(req.body);
      res.status(200).json({message: 'created user'});
    } catch (err) {
      console.log(err);
      res.status(500).json({message: 'error creating user'});
    }
});

//probably don't need this but idk
router.put('/:username', async (req, res) => {
    try {
      // Find the user by their username
      const user = await User.findOne({ where: { username: req.params.username } });
      
      if (!user) {
        return res.status(404).json({ message: 'No user found with this username' });
      }
  
      // change the user's password
      const updatedUser = await user.update(req.body);
  
      res.status(200).json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({message: 'error changing user password'});
    }
  });
  
  module.exports = router;