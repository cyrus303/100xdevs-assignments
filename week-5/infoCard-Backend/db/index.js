const mongoose = require('mongoose');

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://Sachin:oiIYTc6Xva29zWqT@mongodb.7d1cjqv.mongodb.net/'
  )
  .then(console.log('connected to DB'));
