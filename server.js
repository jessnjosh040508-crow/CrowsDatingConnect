// Entry point for the server
const express = require('express');
const app = express();

// Middleware and Routes
const middleware = require('./middleware');
const routes = require('./routes');

app.use(express.json());
app.use(middleware);
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});