const express = require('express');
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/.well-known', express.static('.well-known'));

// Routes;
app.get('/', (req, res) => {
  res.status(200).json({
    data: 'yeap oldu',
  });
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
