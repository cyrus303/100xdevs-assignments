const {Router} = require('express');
const adminMiddleware = require('../middleware/admin');
const {Admin, Course} = require('../db');
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

router.post('/courses', adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const {title, description, price, imageLink} = req.body;
  const course = await Course.create({
    title,
    description,
    price,
    imageLink,
    published: true,
  });

  res.send({
    message: 'Course created successfully',
    courseId: course._id,
  });
});

router.get('/courses', adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find();
  if (!courses) {
    res.send('no courses available');
  }
  res.send(courses);
});

module.exports = router;
