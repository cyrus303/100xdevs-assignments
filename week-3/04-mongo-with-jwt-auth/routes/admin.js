const {Router} = require('express');
const adminMiddleware = require('../middleware/admin');
const router = Router();
const {Admin, User, Course} = require('../db');
const jwt = require('jsonwebtoken');

// Admin Routes
router.post('/signup', async (req, res) => {
  // Implement admin signup logic
  const {username, password} = req.body;

  const adminDetails = await Admin.create({
    username,
    password,
  });

  res.send({message: 'Admin created successfully'});
});

router.post('/signin', async (req, res) => {
  // Implement admin signin logic
  // Description: Logs in an admin account.
  // Input Body: { username: 'admin', password: 'pass' }
  // Output: { token: 'your-token' }

  const {username, password} = req.body;

  const loginDetails = Admin.find({username, password});
  if (loginDetails) {
    const token = jwt.sign({username}, 'kengeri');
    res.send({token});
  } else {
    res.status(403).send('incorrect email or password');
  }
});

router.post('/courses', adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const course = await Course.create({
    title: 'course title',
    description: 'course description',
    price: 100,
    imageLink: 'https://linktoimage.com',
    published: true,
  });

  if (course) {
    res.send({
      message: 'Course created successfully',
      courseId: course._id,
    });
  } else {
    res.send('error creating course');
  }
});

router.get('/courses', adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const course = await Course.find({});

  if (course) {
    res.send(course);
  } else {
    res.send('no course avaliable');
  }
});

module.exports = router;
