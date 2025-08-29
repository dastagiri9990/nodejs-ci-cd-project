// src/routes/api.js
const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from CI/CD Node.js App!' });
});

router.get('/users', (req, res) => {
  res.json({ 
    users: [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ] 
  });
});

module.exports = router;
