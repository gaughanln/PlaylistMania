const router = require('express').Router();
const { User } = require('../../models');


//delete later
// router.get('/', async (req, res) => {
//     res.send("Test Test");
// });

router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll();
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isValidPassword = user.checkPassword(password);

        if (!isValidPassword) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        return res.json({ message: 'Login successful' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        const newUser = await User.create({
            username,
            password,
          });

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