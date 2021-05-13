const express = require('express');

const app = express();
const PORT = process.env.PORT || 19346;

app.use(express.static('public'));

app.listen(PORT, error => {
  if (error) throw error;
  console.log(`App is listening on port ${PORT}`);
});
