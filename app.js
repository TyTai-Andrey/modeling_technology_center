const express = require('express');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/monthData', require('./routes/monthData.routes'));

const PORT = 3000;

async function start() {
  try {
    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`),
    );
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();
