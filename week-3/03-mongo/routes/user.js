const {Router} = require('express');
const router = Router();
const {User, Course} = require('../db');
const userMiddleware = require('../middleware/user');

// User Routes
// Input: { username: 'user', password: 'pass' }
// Output: { message: 'User created successfully' }
router.post('/signup', (req, res) => {
  // Implement user signup logic
  const {username, password} = req.body;
  const userDetails = User.create({
    username,
    password,
  });

  res.send({message: 'User created successfully'});
});

router.get('/courses', async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find();
  if (!courses) {
    res.send('no courses available');
  }
  res.send(courses);
});

router.post(
  '/courses/:courseId',
  userMiddleware,
  async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne(
      {
        username: username,
      },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );
    res.json({
      message: 'Purchase complete!',
    });
  }
);

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });

  console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
