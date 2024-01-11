const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const detailsRouter = require('./routes/detailsRouter');

// Middleware for parsing request bodies
app.use(bodyParser.json());

app.use('/details', detailsRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
