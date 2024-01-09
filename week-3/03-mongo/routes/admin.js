const {Router} = require('express');
const adminMiddleware = require('../middleware/admin');
const {Admin} = require('../db');
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
  // Implement admin signup logic
  const {username, password} = req.body;

  Admin.create({
    username: username,
    password: password,
  });

  res.json({
    message: 'Admin created successfully',
  });
});

router.post('/courses', adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
