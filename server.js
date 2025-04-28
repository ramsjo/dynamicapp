const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Dynamic content (simple)
const users = ['Alice', 'Bob', 'Charlie'];

app.get('/', (req, res) => {
  res.send(`<h1>Users List</h1><ul>${users.map(u => `<li>${u}</li>`).join('')}</ul>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});