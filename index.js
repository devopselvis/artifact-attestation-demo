const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from a secure, attested application!',
    version: process.env.npm_package_version 
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});